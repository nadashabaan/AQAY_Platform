import React, { useState, useEffect } from "react";
import "./AreaTable.css";
import { LuSend } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
const TABLE_HEADS = [
  "Report Title",
  "Report Details",
  "Status",
  "Created On",
  "Last Edit",
  "Change Status",
  "Response",
  "Delete",
];

const fetchReports = async () => {
  try {
    const response = await fetch(
      "http://aqay.runasp.net/api/Reports?pageIndex=1"
    );
    const data = await response.json();
    return data.$values; // Assuming response is always well-formed
  } catch (error) {
    console.error("Error fetching reports:", error);
    return [];
  }
};

const ReportsTable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSendPopup, setShowSendPopup] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [editableAction, setEditableAction] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [emailTitle, setEmailTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData, setTableData] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const getReports = async () => {
      const reports = await fetchReports();
      const formattedReports = reports.map((report) => ({
        id: report.id,
        username: report.intiatorId,
        title: report.title,
        created_on: new Date(report.createdOn).toLocaleDateString(),
        last_edit: new Date(report.lastEdit).toLocaleDateString(),
        status: report.reportstatus === 1 ? "open" : "closed",
        reportdetails: report.description,
        email: "example@example.com",
      }));
      setTableData(formattedReports);
    };

    getReports();
  }, []);

  const handleIconClick = (dataItem) => {
    setCurrentData(dataItem);
    setEditableAction(dataItem.action);
    setShowPopup(true);
  };

  const handleSendIconClick = (dataItem) => {
    setCurrentData(dataItem);
    setShowSendPopup(true);
  };

  const handleActionChange = (e) => {
    setEditableAction(e.target.value);
  };

  const handleEmailBodyChange = (e) => {
    setEmailBody(e.target.value);
  };
  const handleEmailTitleChange = (e) => {
    setEmailTitle(e.target.value);
  };

  const handleSearch = async () => {
    if (!searchQuery) return; // Guard clause for empty query
    try {
      const response = await fetch(
        `http://aqay.runasp.net/api/Reports/title?title=${searchQuery}`
      );
      const data = await response.json();
      setTableData(data.$values || []); // Update the table based on search results
    } catch (error) {
      console.error("Error searching reports:", error);
    }
  };

  const handleDeleteReport = async (id) => {
    try {
      const response = await fetch(
        `http://aqay.runasp.net/api/Reports?id=${id}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        setTableData((prev) => prev.filter((item) => item.id !== id));
        alert("Report deleted successfully!");
      } else {
        throw new Error("Failed to delete the report");
      }
    } catch (error) {
      alert("Failed to delete report. Please try again.");
      console.error("Error deleting report:", error);
    }
  };
  const handleClosePopup = () => {
    const updatedData = tableData.map((item) =>
      item.id === currentData.id ? { ...item, action: editableAction } : item
    );
    setTableData(updatedData);
    setShowPopup(false);
  };

  const handleCloseSendPopup = () => {
    setShowSendPopup(false);
  };

  const handleSendEmail = () => {
    alert(`Sending email to ${currentData.email} with body: ${emailBody}`);
    setShowSendPopup(false);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const toggleStatus = (id) => {
    const updatedData = tableData.map((item) =>
      item.id === id
        ? { ...item, status: item.status === "open" ? "closed" : "open" }
        : item
    );
    setTableData(updatedData);
  };

  const filteredTableData = tableData.filter((dataItem) => {
    if (filterStatus === "all") return true;
    return dataItem.status === filterStatus;
  });

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Title"
          className="filter-dropdown "
        />
        <button onClick={handleSearch} className="search-btn">
          <i className="fa fa-search"></i> Search
        </button>
        <button onClick={fetchReports} className="retrieve-btn">
          Retrieve All
        </button>
        <div className="filter-container">
          <label htmlFor="statusFilter">Filter by Status:</label>
          <select
            id="statusFilter"
            value={filterStatus}
            onChange={handleFilterChange}
            className="filter-dropdown"
          >
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredTableData.map((dataItem) => (
              <tr key={dataItem.id}>
                <td>{dataItem.title}</td>
                <td>
                  <div className="icon-container">
                    <IoEyeOutline
                      size={24}
                      onClick={() => handleIconClick(dataItem)}
                      style={{ cursor: "pointer", margin: "10px" }}
                    />
                  </div>
                </td>
                <td>{dataItem.status}</td>
                <td>{dataItem.created_on}</td>
                <td>{dataItem.last_edit}</td>
                <td>
                  <div className="icon-container">
                    {dataItem.status === "open" ? (
                      <LiaToggleOffSolid
                        size={24}
                        onClick={() => toggleStatus(dataItem.id)}
                        style={{ cursor: "pointer", margin: "10px" }}
                      />
                    ) : (
                      <LiaToggleOnSolid
                        size={24}
                        onClick={() => toggleStatus(dataItem.id)}
                        style={{ cursor: "pointer", margin: "10px" }}
                      />
                    )}
                  </div>
                </td>
                <td>
                  <div className="icon-container">
                    <LuSend
                      size={24}
                      onClick={() => handleSendIconClick(dataItem)}
                      style={{
                        cursor: "pointer",
                        margin: "10px",
                      }}
                    />
                  </div>
                </td>

                <td>
                  <div className="icon-container">
                    <MdDeleteOutline
                      size={24}
                      onClick={() => handleDeleteReport(dataItem.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <div className="popup-text">
              Describtion:
              <p>{currentData.reportdetails}</p>
              <label className="action-label">
                Action:
                <textarea
                  value={editableAction}
                  onChange={handleActionChange}
                  className="editable-textarea w-full p-2 border border-orange rounded"
                />
              </label>
            </div>
          </div>
        </div>
      )}
      {showSendPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseSendPopup}>
              &times;
            </span>
            <div className="popup-text">
              <label className="action-label">
                Email:
                <br />
                <input
                  type="text"
                  value={currentData.email}
                  readOnly
                  className="email-textarea w-64 p-2 border border-orange rounded"
                />
              </label>
              <label className="action-label">
                Title:
                <br />
                <textarea
                  value={emailTitle}
                  onChange={handleEmailTitleChange}
                  className="email-textarea w-64 h-12 p-2 border border-orange rounded"
                />
              </label>
              <label className="action-label">
                Email Body:
                <textarea
                  value={emailBody}
                  onChange={handleEmailBodyChange}
                  className="editable-textarea w-full p-2 border border-orange rounded"
                />
              </label>

              <button onClick={handleSendEmail} className="save-btn">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReportsTable;

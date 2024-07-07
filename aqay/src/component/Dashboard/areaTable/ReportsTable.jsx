import React, { useState, useEffect } from "react";
import "./AreaTable.css";
import axios from "axios";
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
    const response = await fetch("http://aqay.runasp.net/api/Reports");
    const data = await response.json();
    return data.$values || [];
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
  const [actionError, setActionError] = useState("");

  useEffect(() => {
    const getReports = async () => {
      const reports = await fetchReports();
      const formattedReports = reports.map((report) => ({
        id: report.id,
        username: report.initiatorId,
        title: report.title,
        created_on: new Date(report.createdOn).toLocaleDateString(),
        last_edit: new Date(report.lastEdit).toLocaleDateString(),
        status: report.reportstatus === 1 ? "open" : "closed",
        reportdetails: report.description,
      }));
      setTableData(formattedReports);
    };

    getReports();
  }, []);

  const handleEmailBodyChange = (e) => {
    setEmailBody(e.target.value);
  };

  const handleEmailTitleChange = (e) => {
    setEmailTitle(e.target.value);
  };

  const handleSearch = async () => {
    if (!searchQuery) return;
    try {
      const response = await fetch(
        `http://aqay.runasp.net/api/Reports/title?title=${searchQuery}`
      );
      const data = await response.json();
      setTableData(data.$values || []);
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

  const handleSendEmail = async () => {
    const emailPayload = {
      RecieverEmail: currentData.email,
      Subject: emailTitle,
      Body: emailBody,
    };

    try {
      const response = await axios.post(
        "http://aqay.runasp.net/api/Mailing",
        emailPayload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        alert("Email sent successfully!");
        setShowSendPopup(false);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    }
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleIconClick = (dataItem) => {
    setCurrentData(dataItem);
    setEditableAction(dataItem.action);
    setShowPopup(true);
  };

  const toggleStatus = async (dataItem) => {
    const newStatus = dataItem.status === "open" ? 0 : 1;
    try {
      const response = await axios.put(
        `http://aqay.runasp.net/api/Reports/updateStatus?id=${dataItem.id}`,
        { reportstatus: newStatus },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data && response.status === 200) {
        setTableData(
          tableData.map((item) =>
            item.id === dataItem.id
              ? {
                  ...item,
                  status: response.data.reportstatus === 1 ? "open" : "closed",
                }
              : item
          )
        );
      } else {
        throw new Error("Failed to update the report status");
      }
    } catch (error) {
      console.error("Error updating report status:", error);
      alert("Failed to update status. Please try again.");
    }
  };

  const updateAction = async (id, newAction) => {
    try {
      const response = await axios.put(
        `http://aqay.runasp.net/api/Reports/updateAction?id=${id}&action=${encodeURIComponent(
          newAction
        )}`,
        {},
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        alert("Action updated successfully!");

        setTableData(
          tableData.map((item) =>
            item.id === id ? { ...item, action: newAction } : item
          )
        );
      } else {
        throw new Error("Failed to update the action");
      }
    } catch (error) {
      console.error("Error updating action:", error);
      setActionError("Failed to update action. Please try again.");
    }
  };

  const filteredTableData = tableData.filter((dataItem) => {
    if (filterStatus === "all") return true;
    return dataItem.status === filterStatus;
  });

  const handleActionChange = (e) => {
    setEditableAction(e.target.value);
  };

  const handleSubmitAction = () => {
    updateAction(currentData.id, editableAction);
  };

  const handleSendIconClick = async (dataItem) => {
    setCurrentData(dataItem);
    await fetchEmail(dataItem.username);
    setShowSendPopup(true);
  };

  const fetchEmail = async (initiatorId) => {
    try {
      const response = await axios.get(
        `http://aqay.runasp.net/api/Reports/GetEmailByUserId?id=${initiatorId}`
      );
      setCurrentData((prevData) => ({
        ...prevData,
        email: response.data.email,
      }));
    } catch (error) {
      console.error("Failed to fetch email:", error);
      setCurrentData((prevData) => ({
        ...prevData,
        email: "Seham123_@gmail.com",
      }));
    }
  };

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
                    <button onClick={() => toggleStatus(dataItem)}>
                      {dataItem.status === "open" ? (
                        <LiaToggleOffSolid
                          size={24}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <LiaToggleOnSolid
                          size={24}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </button>
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
              Description:
              <p>{currentData.reportdetails}</p>
              <label className="action-label">
                Action:
                <textarea
                  value={editableAction}
                  onChange={handleActionChange}
                  className="editable-textarea w-full p-2 border border-orange rounded"
                />
                <button onClick={handleSubmitAction} className="save-btn">
                  Save Action
                </button>
                {actionError && <p className="error-text">{actionError}</p>}
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

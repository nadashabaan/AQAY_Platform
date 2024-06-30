import React, { useState, useEffect } from "react";
import ReportsTableAction from "./ReportsTableAction";
import "./AreaTable.css";
import { LuSend } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";

const TABLE_HEADS = [
  "Report Title",
  "Report Details",
  "Status",
  "Created On",
  "Last Edit",
  "Change Status",
  "Response",
];

const ReportsTable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [editableAction, setEditableAction] = useState("");
  const [tableData, setTableData] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    // Fetch data from the API
    fetch("http://aqay.runasp.net/api/Reports?pageIndex=1")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((report) => ({
          id: report.id,
          title: report.title,
          created_on: new Date(report.createdOn).toLocaleDateString(),
          last_edit: new Date(report.lastEdit).toLocaleDateString(),
          status: report.reportstatus === 1 ? "open" : "closed",
          action: report.action || "",
          reportdetails: report.description,
        }));
        setTableData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleIconClick = (dataItem) => {
    setCurrentData(dataItem);
    setEditableAction(dataItem.action);
    setShowPopup(true);
  };

  const handleActionChange = (e) => {
    setEditableAction(e.target.value);
  };

  const handleClosePopup = () => {
    const updatedData = tableData.map((item) =>
      item.id === currentData.id ? { ...item, action: editableAction } : item
    );
    setTableData(updatedData);
    setShowPopup(false);
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
        <h4 className="data-table-title">Reports</h4>
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
                      key={dataItem.id}
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
                        style={{ cursor: "pointer", margin: "10px" }}
                        onClick={() => toggleStatus(dataItem.id)}
                      />
                    ) : (
                      <LiaToggleOnSolid
                        size={24}
                        style={{ cursor: "pointer", margin: "10px" }}
                        onClick={() => toggleStatus(dataItem.id)}
                      />
                    )}
                  </div>
                </td>
                <td>
                  <div className="icon-container">
                    <LuSend
                      size={24}
                      style={{
                        cursor: "pointer",
                        margin: "10px",
                      }}
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
              <p>{currentData.reportdetails}</p>
              <label className="action-label">
                Action:
                <textarea
                  value={editableAction}
                  onChange={handleActionChange}
                  className="editable-textarea"
                />
              </label>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReportsTable;

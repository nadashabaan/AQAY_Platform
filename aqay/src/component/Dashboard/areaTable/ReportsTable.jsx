import ReportsTableAction from "./ReportsTableAction";
import "./AreaTable.css";
import React, { useState } from "react";
import { LuSend } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";

const TABLE_HEADS = [
  "User Name",
  "Report Title",
  "Report Details",
  "Status",
  "Created On",
  "Last Edit",
  "Change Status",
  "Response",
];

const initialTableData = [
  {
    id: 100,
    username: "nada",
    title: "tech issue",
    created_on: "Jun 29,2022",
    last_edit: "Jun 30,2022",
    status: "open",
    action: " send mail with bla bla ",
    reportdetails:
      "I exchanged a bag and brand rejected the request without response",
  },
  {
    id: 101,
    username: "roaa",
    title: "order delay ",
    created_on: "Jun 5,2022",
    last_edit: "Jun 10,2022",
    status: "open",
    action: " send mail with bla bla ",
    reportdetails: "My order delayed around 12 days",
  },
  {
    id: 102,
    username: "roaa",
    title: "order delay ",
    created_on: "Jun 18,2022",
    last_edit: "Jun 25,2022",
    status: "closed",
    action: " send mail with bla bla ",
    reportdetails: "My order delayed around 12 days",
  },
  {
    id: 103,
    username: "roaa",
    title: "order delay ",
    created_on: "Jun 5,2022",
    last_edit: "Jun 13,2022",
    status: "closed",
    action: " send mail with bla bla ",
    reportdetails: "My order delayed around 12 days",
  },
  {
    id: 104,
    username: "roaa",
    title: "order delay ",
    created_on: "Jun 18,2022",
    last_edit: "Jun 25,2022",
    status: "closed",
    action: " send mail with bla bla ",
    reportdetails:
      "My order delayed around 12 days,My order delayed around 12 days",
  },
  {
    id: 105,
    username: "roaa",
    title: "order delay ",
    created_on: "Jun 15,2022",
    last_edit: "Jun 25,2022",
    status: "open",
    action: " send mail with bla bla ",
    reportdetails:
      "My order delayed around 12 days,My order delayed around 12 days,My order delayed around 12 days,My order delayed around 12 days,My order delayed around 12 days",
  },
];

const ReportsTable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [editableAction, setEditableAction] = useState("");
  const [tableData, setTableData] = useState(initialTableData);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleIconClick = (dataItem) => {
    setCurrentData(dataItem);
    setEditableAction(dataItem.action);
    setShowPopup(true);
  };

  const handleActionChange = (e) => {
    setEditableAction(e.target.value);
  };

  const handleClosePopup = () => {
    // Update the action in tableData
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
                <td>{dataItem.username}</td>
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

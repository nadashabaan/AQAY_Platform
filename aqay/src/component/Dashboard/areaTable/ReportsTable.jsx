// import ReportsTableAction from "./ReportsTableAction";
// import "./AreaTable.css";
// import React, { useState } from "react";
// import { LuSend } from "react-icons/lu";
// import { IoEyeOutline } from "react-icons/io5";
// import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";

// const TABLE_HEADS = [
//   "User Name",
//   "Report Title",
//   "Report Details",
//   "Status",
//   "Created On",
//   "Last Edit",
//   "Change Status",
//   "Response",
// ];

// const initialTableData = [
//   {
//     id: 100,
//     username: "nada",
//     title: "tech issue",
//     created_on: "Jun 29,2022",
//     last_edit: "Jun 30,2022",
//     status: "open",
//     action: " send mail with bla bla ",
//     reportdetails:
//       "I exchanged a bag and brand rejected the request without response",
//     email: "nada@example.com",
//   },
//   {
//     id: 101,
//     username: "roaa",
//     title: "order delay ",
//     created_on: "Jun 5,2022",
//     last_edit: "Jun 10,2022",
//     status: "open",
//     action: " send mail with bla bla ",
//     reportdetails: "My order delayed around 12 days",
//     email: "roaa@example.com",
//   },
//   // Add other entries here...
// ];

// const ReportsTable = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [showSendPopup, setShowSendPopup] = useState(false);
//   const [currentData, setCurrentData] = useState({});
//   const [editableAction, setEditableAction] = useState("");
//   const [emailBody, setEmailBody] = useState("");
//   const [tableData, setTableData] = useState(initialTableData);
//   const [filterStatus, setFilterStatus] = useState("all");

//   const handleIconClick = (dataItem) => {
//     setCurrentData(dataItem);
//     setEditableAction(dataItem.action);
//     setShowPopup(true);
//   };

//   const handleSendIconClick = (dataItem) => {
//     setCurrentData(dataItem);
//     // Here you would fetch the email if it's not in the initial data
//     setShowSendPopup(true);
//   };

//   const handleActionChange = (e) => {
//     setEditableAction(e.target.value);
//   };

//   const handleEmailBodyChange = (e) => {
//     setEmailBody(e.target.value);
//   };

//   const handleClosePopup = () => {
//     const updatedData = tableData.map((item) =>
//       item.id === currentData.id ? { ...item, action: editableAction } : item
//     );
//     setTableData(updatedData);
//     setShowPopup(false);
//   };

//   const handleCloseSendPopup = () => {
//     setShowSendPopup(false);
//   };

//   const handleSendEmail = () => {
//     // Call the send email API here
//     alert(`Sending email to ${currentData.email} with body: ${emailBody}`);
//     setShowSendPopup(false);
//   };

//   const handleFilterChange = (e) => {
//     setFilterStatus(e.target.value);
//   };

//   const toggleStatus = (id) => {
//     const updatedData = tableData.map((item) =>
//       item.id === id
//         ? { ...item, status: item.status === "open" ? "closed" : "open" }
//         : item
//     );
//     setTableData(updatedData);
//   };

//   const filteredTableData = tableData.filter((dataItem) => {
//     if (filterStatus === "all") return true;
//     return dataItem.status === filterStatus;
//   });

//   return (
//     <section className="content-area-table">
//       <div className="data-table-info">
//         <h4 className="data-table-title">Reports</h4>
//         <div className="filter-container">
//           <label htmlFor="statusFilter">Filter by Status:</label>
//           <select
//             id="statusFilter"
//             value={filterStatus}
//             onChange={handleFilterChange}
//             className="filter-dropdown"
//           >
//             <option value="all">All</option>
//             <option value="open">Open</option>
//             <option value="closed">Closed</option>
//           </select>
//         </div>
//       </div>
//       <div className="data-table-diagram">
//         <table>
//           <thead>
//             <tr>
//               {TABLE_HEADS?.map((th, index) => (
//                 <th key={index}>{th}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTableData.map((dataItem) => (
//               <tr key={dataItem.id}>
//                 <td>{dataItem.username}</td>
//                 <td>{dataItem.title}</td>
//                 <td>
//                   <div className="icon-container">
//                     <IoEyeOutline
//                       key={dataItem.id}
//                       size={24}
//                       onClick={() => handleIconClick(dataItem)}
//                       style={{ cursor: "pointer", margin: "10px" }}
//                     />
//                   </div>
//                 </td>
//                 <td>{dataItem.status}</td>
//                 <td>{dataItem.created_on}</td>
//                 <td>{dataItem.last_edit}</td>
//                 <td>
//                   <div className="icon-container">
//                     {dataItem.status === "open" ? (
//                       <LiaToggleOffSolid
//                         size={24}
//                         style={{ cursor: "pointer", margin: "10px" }}
//                         onClick={() => toggleStatus(dataItem.id)}
//                       />
//                     ) : (
//                       <LiaToggleOnSolid
//                         size={24}
//                         style={{ cursor: "pointer", margin: "10px" }}
//                         onClick={() => toggleStatus(dataItem.id)}
//                       />
//                     )}
//                   </div>
//                 </td>
//                 <td>
//                   <div className="icon-container">
//                     <LuSend
//                       size={24}
//                       style={{
//                         cursor: "pointer",
//                         margin: "10px",
//                       }}
//                       onClick={() => handleSendIconClick(dataItem)}
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={handleClosePopup}>
//               &times;
//             </span>
//             <div className="popup-text">
//               <p>{currentData.reportdetails}</p>
//               <label className="action-label">
//                 Action:
//                 <textarea
//                   value={editableAction}
//                   onChange={handleActionChange}
//                   className="editable-textarea"
//                 />
//               </label>
//             </div>
//           </div>
//         </div>
//       )}
//       {showSendPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={handleCloseSendPopup}>
//               &times;
//             </span>
//             <div className="popup-text">
//               <label className="action-label">
//                 Email:
//                 <input
//                   type="text"
//                   value={currentData.email}
//                   readOnly
//                   className=" email-textarea w-64 p-2 border border-orange rounded"
//                 />
//               </label>
//               <label className="action-label">
//                 Email Body:
//                 <textarea
//                   value={emailBody}
//                   onChange={handleEmailBodyChange}
//                   className="editable-textarea w-full p-2 border border-orange rounded"
//                 />
//               </label>
//               <button onClick={handleSendEmail} className="save-btn">
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ReportsTable;

import React, { useState, useEffect } from "react";
import ReportsTableAction from "./ReportsTableAction";
import "./AreaTable.css";
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

const fetchReports = async () => {
  const response = await fetch(
    "http://aqay.runasp.net/api/Reports?pageIndex=1"
  );
  const data = await response.json();
  return data;
};

const ReportsTable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSendPopup, setShowSendPopup] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [editableAction, setEditableAction] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [tableData, setTableData] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const getReports = async () => {
      const reports = await fetchReports();
      const formattedReports = reports.map((report) => ({
        id: report.id,
        username: report.intiatorId, // Assuming this is the username
        title: report.title,
        created_on: new Date(report.createdOn).toLocaleDateString(),
        last_edit: new Date(report.lastEdit).toLocaleDateString(),
        status: report.reportstatus === 1 ? "open" : "closed", // Assuming 1 is open, 0 is closed
        action: report.action || "No action taken",
        reportdetails: report.description,
        email: "example@example.com", // Replace this with actual email if available in response
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
    // Call the send email API here
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
                      onClick={() => handleSendIconClick(dataItem)}
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
                <input
                  type="text"
                  value={currentData.email}
                  readOnly
                  className="email-textarea w-64 p-2 border border-orange rounded"
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
              <button onClick={handleCloseSendPopup} className="save-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReportsTable;

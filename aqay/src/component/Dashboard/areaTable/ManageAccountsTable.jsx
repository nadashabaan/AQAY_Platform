import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AreaTable.css";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";

const TABLE_HEADS = [
  "User Name",
  "User Email",
  "Phone Number",
  "Type",
  "Status",
  "Action",
];

const ManageAccountsTable = () => {
  const [tableData, setTableData] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const merchantResponse = await axios.get(
          "http://aqay.runasp.net/api/Admin/merchants"
        );
        const consumerResponse = await axios.get(
          "http://aqay.runasp.net/api/Admin/consumers"
        );

        const merchants = merchantResponse.data.$values.map((merchant) => ({
          id: merchant.id,
          name: merchant.userName,
          email: merchant.email,
          phone: merchant.phoneNumber || "N/A",
          type: "Merchant",
          status: merchant.isActive ? "Active" : "Deactivated",
        }));

        const consumers = consumerResponse.data.$values.map((consumer) => ({
          id: consumer.id,
          name: consumer.userName,
          email: consumer.email,
          phone: "N/A",
          type: "Consumer",
          status: consumer.isActive ? "Active" : "Deactivated",
        }));

        setTableData([...merchants, ...consumers]);
      } catch (error) {
        console.error("Error fetching account data:", error);
      }
    };

    fetchAccounts();
  }, []);

  const handleToggleStatus = async (id) => {
    try {
      const response = await axios.post(
        `http://aqay.runasp.net/api/Admin/toggle activity?id=${id}`
      );
      if (response.data) {
        const updatedData = tableData.map((item) =>
          item.id === id
            ? {
                ...item,
                status: item.status === "Active" ? "Deactivated" : "Active",
              }
            : item
        );
        setTableData(updatedData);
      } else {
        throw new Error("Failed to toggle status");
      }
    } catch (error) {
      console.error("Error toggling user status:", error.message);
      alert("Failed to toggle status. Please try again.");
    }
  };

  const filteredData = tableData.filter(
    (item) =>
      (filterType === "all" || item.type === filterType) &&
      (filterStatus === "all" || item.status === filterStatus)
  );

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <select
          className="filter-dropdown"
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="Consumer">Consumer</option>
          <option value="Merchant">Merchant</option>
        </select>
        <select
          className="filter-dropdown"
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Deactivated">Deactivated</option>
        </select>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((dataItem) => (
              <tr key={dataItem.id}>
                <td>{dataItem.name}</td>
                <td>{dataItem.email}</td>
                <td>{dataItem.phone}</td>
                <td>{dataItem.type}</td>
                <td>{dataItem.status}</td>
                <td className="dt-cell-action">
                  <button onClick={() => handleToggleStatus(dataItem.id)}>
                    {dataItem.status === "Active" ? (
                      <LiaToggleOnSolid size={24} />
                    ) : (
                      <LiaToggleOffSolid size={24} />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageAccountsTable;

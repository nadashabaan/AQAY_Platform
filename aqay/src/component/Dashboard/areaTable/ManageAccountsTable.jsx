import React, { useState, useEffect } from "react";
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

const TABLE_DATA = [
  {
    id: 1,
    name: "Nada",
    email: "nada123@gmail.com",
    phone: 201077777777,
    type: "buyer",
    status: "Deactivated",
  },
  {
    id: 2,
    name: "Nada",
    email: "nada123@gmail.com",
    phone: 201077777777,
    type: "buyer",
    status: "Deactivated",
  },
  {
    id: 3,
    name: "CoCo",
    email: "CoCo123@gmail.com",
    phone: 2010888888888,
    type: "merchant",
    status: "Active",
  },
  {
    id: 4,
    name: "Nada",
    email: "nada123@gmail.com",
    phone: 201077777777,
    type: "buyer",
    status: "Deactivated",
  },
  {
    id: 5,
    name: "CoCo",
    email: "CoCo123@gmail.com",
    phone: 2010888888888,
    type: "merchant",
    status: "Active",
  },
  {
    id: 6,
    name: "Nada",
    email: "nada123@gmail.com",
    phone: 201077777777,
    type: "buyer",
    status: "Active",
  },
];

const ManageAccountsTable = () => {
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [tableData, setTableData] = useState(TABLE_DATA);

  useEffect(() => {
    const dropdown = document.querySelector(".filter-dropdown");
    const options = dropdown.querySelectorAll("option");

    options.forEach((option) => {
      option.addEventListener("mouseover", () => {
        option.style.backgroundColor = "rgba(255, 140, 0, 0.8)";
      });
      option.addEventListener("mouseout", () => {
        option.style.backgroundColor = "rgba(255, 165, 0, 0.7)";
      });
    });
  }, []);

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleFilterStatusChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleToggleStatus = async (id) => {
    try {
      const response = await fetch(
        `http://aqay.runasp.net/api/Admin/toggle activity?id=${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to toggle status");
      }

      const updatedData = tableData.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Active" ? "Deactivated" : "Active",
            }
          : item
      );
      setTableData(updatedData);
    } catch (error) {
      console.error(error);
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
        <h6 className="data-table-title">Manage Accounts</h6>
        <div>
          <select className="filter-dropdown" onChange={handleFilterTypeChange}>
            <option value="all">All Types</option>
            <option value="buyer">Consumer</option>
            <option value="merchant">Merchant</option>
          </select>
          <select
            className="filter-dropdown"
            onChange={handleFilterStatusChange}
          >
            <option value="all">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Deactivated">Deactivated</option>
          </select>
        </div>
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
            {filteredData.map((dataItem) => {
              return (
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
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageAccountsTable;

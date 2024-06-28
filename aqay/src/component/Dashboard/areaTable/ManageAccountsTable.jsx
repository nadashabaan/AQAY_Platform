import React, { useState, useEffect } from "react";
import ManageAccountsTableAction from "./ManageAccountsTableAction";
import "./AreaTable.css";

const TABLE_HEADS = [
  "User Name",
  "User Email",
  "Phone Number",
  "Type",
  "Action",
];

const TABLE_DATA = [
  {
    id: 1,
    name: "Nada",
    email: "nada123@gmail.com",
    phone: 201077777777,
    type: "buyer",
  },
  {
    id: 2,
    name: "Nada",
    email: "nada123@gmail.com",
    phone: 201077777777,
    type: "buyer",
  },
  {
    id: 3,
    name: "CoCo",
    email: "CoCo123@gmail.com",
    phone: 2010888888888,
    type: "merchant",
  },
  {
    id: 4,
    name: "Nada",
    email: "nada123@gmail.com",
    phone: 201077777777,
    type: "buyer",
  },
  {
    id: 5,
    name: "CoCo",
    email: "CoCo123@gmail.com",
    phone: 2010888888888,
    type: "merchant",
  },
  {
    id: 6,
    name: "Nada",
    email: "nada123@gmail.com",
    phone: 201077777777,
    type: "buyer",
  },
];

const ManageAccountsTable = () => {
  const [filter, setFilter] = useState("all");

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData =
    filter === "all"
      ? TABLE_DATA
      : TABLE_DATA.filter((item) => item.type === filter);

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h6 className="data-table-title">Manage Accounts</h6>

        <div>
          <select className="filter-dropdown" onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="buyer">consumer</option>
            <option value="merchant">Merchant</option>
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
            {filteredData?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.email}</td>
                  <td>{dataItem.phone}</td>
                  <td>{dataItem.type}</td>
                  <td className="dt-cell-action">
                    <ManageAccountsTableAction />
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

import React, { useState } from "react";
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.css";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const INITIAL_TABLE_DATA = [
  {
    id: 100,
    name: "Iphone 13 Pro",
    order_id: 11232,
    date: "2022-06-29",
    customer: "Afaq Karim",
    status: "requested",
    amount: 400,
  },
  {
    id: 101,
    name: "Macbook Pro",
    order_id: 11232,
    date: "2022-06-29",
    customer: "Afaq Karim",
    status: "requested",
    amount: 288,
  },
  {
    id: 102,
    name: "Apple Watch",
    order_id: 11232,
    date: "2022-06-29",
    customer: "Afaq Karim",
    status: "requested",
    amount: 500,
  },
  {
    id: 103,
    name: "Microsoft Book",
    order_id: 11232,
    date: "2022-06-29",
    customer: "Afaq Karim",
    status: "requested",
    amount: 100,
  },
  {
    id: 104,
    name: "Apple Pen",
    order_id: 11232,
    date: "2022-06-29",
    customer: "Afaq Karim",
    status: "requested",
    amount: 60,
  },
  {
    id: 105,
    name: "Airpods",
    order_id: 11232,
    date: "2022-06-29",
    customer: "Afaq Karim",
    status: "requested",
    amount: 80,
  },
];

const AreaTable = () => {
  const [tableData, setTableData] = useState(INITIAL_TABLE_DATA);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");

  const handleStatusChange = (id, newStatus) => {
    const updatedData = tableData.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setTableData(updatedData);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
  };

  const filteredData = tableData.filter((item) => {
    const statusMatches =
      statusFilter === "all" || item.status === statusFilter;
    const dateMatches = !dateFilter || item.date === dateFilter;
    return statusMatches && dateMatches;
  });

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
        <div className="filters">
          <select
            className="filter-dropdown"
            onChange={handleStatusFilterChange}
            value={statusFilter}
          >
            <option value="all">All</option>
            <option value="requested">Requested</option>
            <option value="processing">Processing</option>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="shipped">Shipped</option>
          </select>
          <input
            type="date"
            className="filter-date"
            onChange={handleDateFilterChange}
            value={dateFilter}
          />
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
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>${dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction
                      currentStatus={dataItem.status}
                      onStatusChange={(newStatus) =>
                        handleStatusChange(dataItem.id, newStatus)
                      }
                    />
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

export default AreaTable;

import React, { useState } from "react";
import OrderHAction from "./OrderHAction";
import "./AreaTable.css";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Brand Name",
  "Status",
  "Amount",
  "Response",
  "Action",
];

const INITIAL_TABLE_DATA = [
  {
    id: 100,
    name: "Iphone 13 Pro",
    order_id: 11232,
    date: "2022-06-29",
    brand_name: "Apple",
    status: "delivered",
    amount: 400,
    response: "",
  },
  {
    id: 101,
    name: "Macbook Pro",
    order_id: 11233,
    date: "2022-06-30",
    brand_name: "Apple",
    status: "requested",
    amount: 288,
    response: "",
  },
  {
    id: 102,
    name: "Apple Watch",
    order_id: 11234,
    date: "2022-07-01",
    brand_name: "Apple",
    status: "requested",
    amount: 500,
    response: "",
  },
  {
    id: 103,
    name: "Microsoft Book",
    order_id: 11235,
    date: "2022-07-02",
    brand_name: "Microsoft",
    status: "requested",
    amount: 100,
    response: "",
  },
  {
    id: 104,
    name: "Apple Pen",
    order_id: 11236,
    date: "2022-07-03",
    brand_name: "Apple",
    status: "requested",
    amount: 60,
    response: "",
  },
  {
    id: 105,
    name: "Airpods",
    order_id: 11237,
    date: "2022-07-04",
    brand_name: "Apple",
    status: "requested",
    amount: 80,
    response: "",
  },
];

const OrderHTable = () => {
  const [tableData, setTableData] = useState(INITIAL_TABLE_DATA);
  const [statusFilter, setStatusFilter] = useState("all");

  const handleStatusChange = (id, newStatus) => {
    const updatedData = tableData.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setTableData(updatedData);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredData = tableData.filter((item) => {
    return statusFilter === "all" || item.status === statusFilter;
  });

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title text-center">Your Orders</h4>
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
            {filteredData.map((dataItem) => (
              <tr key={dataItem.id}>
                <td>{dataItem.name}</td>
                <td>{dataItem.order_id}</td>
                <td>{dataItem.date}</td>
                <td>{dataItem.brand_name}</td>

                <td>
                  <div className="dt-status">
                    <span
                      className={`dt-status-dot dot-${dataItem.status}`}
                    ></span>
                    <span className="dt-status-text">{dataItem.status}</span>
                  </div>
                </td>
                <td>${dataItem.amount.toFixed(2)}</td>
                <td>{dataItem.response}</td>
                <td className="dt-cell-action">
                  <OrderHAction
                    currentStatus={dataItem.status}
                    onStatusChange={(newStatus) =>
                      handleStatusChange(dataItem.id, newStatus)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderHTable;

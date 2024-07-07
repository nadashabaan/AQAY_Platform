import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.css";
import { IoEyeOutline } from "react-icons/io5";
import { useUser } from "../../../context/UserContext";

const TABLE_HEADS = [
  "Product Name",
  "Order ID",
  "Date",
  "Customer Name",
  "Address",
  "Status",
  "Amount",
  "Action",
];

const AreaTable = () => {
  const { brandId } = useUser();
  const [tableData, setTableData] = useState([]);
  const [statusFilter, setStatusFilter] = useState("0");
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!brandId) {
        console.log("Brand ID is not available");
        return;
      }

      try {
        const response = await axios.get(
          `http://aqay.runasp.net/api/Order/brand/orders?brandId=${brandId}&status=${statusFilter}`
        );
        setTableData(
          response.data.$values.map((order) => ({
            ...order,
            status: order.orderstatuses === 0 ? "Pending" : "Processed",
            amount: parseFloat(order.totalPrice).toFixed(2),
            date: new Date(order.createdOn).toLocaleDateString(),
          }))
        );
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, [statusFilter, brandId]);

  const handleStatusChange = (id, newStatus) => {
    const updatedData = tableData.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setTableData(updatedData);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleAddressClick = (address) => {
    setPopupData(address);
  };

  const handleClosePopup = () => {
    setPopupData(null);
  };

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <div className="filters">
          <select
            className="filter-dropdown"
            onChange={handleStatusFilterChange}
            value={statusFilter}
          >
            <option value="0">Pending</option>
            <option value="1">Processed</option>
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
            {tableData.map((dataItem) => (
              <tr key={dataItem.id}>
                <td>{dataItem.productName}</td>
                <td>{dataItem.id}</td>
                <td>{dataItem.date}</td>
                <td>{dataItem.consumerName}</td>
                <td>
                  <IoEyeOutline
                    size={24}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleAddressClick(dataItem.address)}
                  />
                </td>
                <td>{dataItem.status}</td>
                <td>${dataItem.amount}</td>
                <td>
                  <AreaTableAction
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
      {popupData && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <p>{popupData}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AreaTable;

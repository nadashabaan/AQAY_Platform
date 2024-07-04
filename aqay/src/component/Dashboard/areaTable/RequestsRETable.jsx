import RequestsAction from "./RequestsAction";
import "./AreaTable.css";
import { IoEyeOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";

const TABLE_HEADS = [
  "Customer name",
  "Request Type",
  "Request Details",
  "Product ID",
  "Product Name ",
  "Date",
  "Action",
];

const TABLE_DATA = [
  {
    requst_id: 100,
    requst_details: "  The product arrived broken, damaged, or malfunctioning ",
    product_name: "Iphone 13 Pro",
    product_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    type: "Refund",
  },
  {
    requst_id: 101,
    requst_details:
      "  The wrong product was sent, different from what was ordered. ",
    product_name: "Watch",
    product_id: 55555,
    date: "Jun 24,2022",
    customer: "Afaq Karim",
    type: "Exchange",
  },
  {
    requst_id: 99,
    requst_details: "   Clothing or shoes that do not fit properly.",
    product_name: "T-shirt",
    product_id: 444,
    date: "Jun 28,2022",
    customer: "Afaq Karim",
    type: "Exchange",
  },
  {
    requst_id: 110,
    requst_details:
      "   The product is of poor quality or does not meet the customer's expectations.",
    product_name: "Watch",
    product_id: 8888,
    date: "Jun 20,2022",
    customer: "Afaq Karim",
    type: "Refund",
  },
  {
    requst_id: 109,
    requst_details:
      "  The wrong product was sent, different from what was ordered. ",
    product_name: "Watch",
    product_id: 8932,
    date: "Jun 24,2022",
    customer: "Afaq Karim",
    type: "Exchange",
  },
  {
    requst_id: 108,
    requst_details:
      "  The wrong product was sent, different from what was ordered. ",
    product_name: "Watch",
    product_id: 55555,
    date: "Jun 24,2022",
    customer: "Afaq Karim",
    type: "Exchange",
  },
];

const RequestsRETable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentData, setCurrentData] = useState("");

  const handleIconClick = (text) => {
    setCurrentData(text);
    setShowPopup(true);
  };
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
        <div>
          <select className="filter-dropdown" onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Exchange">Exchange</option>
            <option value="Refund">Refund</option>
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
            {filteredData?.map((dataItem) => (
              <tr key={dataItem.requst_id}>
                <td>{dataItem.customer}</td>
                <td>{dataItem.type}</td>
                <td>
                  <div className="icon-container">
                    <IoEyeOutline
                      key={dataItem.requst_id}
                      size={24}
                      onClick={() => handleIconClick(dataItem.requst_details)}
                      style={{ cursor: "pointer", margin: "10px" }}
                    />
                  </div>
                </td>
                <td>{dataItem.product_id}</td>
                <td>{dataItem.product_name}</td>
                <td>{dataItem.date}</td>
                <td className="dt-cell-action">
                  <RequestsAction />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <div className="popup-text">
              <p>{currentData}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RequestsRETable;

import React, { useEffect, useState } from "react";
import "./AreaTable.css";
import SubscriptionRequestsAction from "./SubscriptionRequestsAction";
import axios from "axios";

const TABLE_HEADS = [
  "Brand Name",
  "Brand Email",
  "Phone Number",
  "Tax Registration Number",
  "National ID",
  "Action",
];

const SubscriptionRequestsTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://aqay.runasp.net/api/Admin/pending%20merchants"
        );
        setTableData(response.data.$values);
      } catch (error) {
        console.error("Error fetching subscription requests:", error);
      }
    };

    fetchData();
  }, []);

  const handleRemoveRequest = (id) => {
    setTableData((currentData) => currentData.filter((item) => item.id !== id));
  };

  return (
    <section className="content-area-table">
      <div className="data-table-info"></div>
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
                <td>{dataItem.brandName}</td>
                <td>{dataItem.email}</td>
                <td>{dataItem.phoneNumber}</td>
                <td>{dataItem.trn}</td>
                <td>{dataItem.natid}</td>
                <td className="dt-cell-action">
                  <SubscriptionRequestsAction
                    id={dataItem.id}
                    onRemove={handleRemoveRequest}
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

export default SubscriptionRequestsTable;

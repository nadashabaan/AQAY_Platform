import SubscriptionRequestsAction from "./SubscriptionRequestsAction";
import "./AreaTable.css";
import { useEffect, useState } from "react";
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
          "http://aqay.runasp.net/api/Admin/pending%20merchants?pageIndex=1"
        );
        setTableData(response.data.items.$values);
      } catch (error) {
        console.error("Error fetching subscription requests:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Subscription Requests</h4>
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
            {tableData?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.username}</td>
                  <td>{dataItem.email}</td>
                  <td>{dataItem.phoneNumber}</td>
                  <td>{dataItem.trn}</td>
                  <td>{dataItem.natid}</td>
                  <td className="dt-cell-action">
                    <SubscriptionRequestsAction id={dataItem.id} />
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

export default SubscriptionRequestsTable;

import SubscriptionRequestsAction from "./SubscriptionRequestsAction";
import "./AreaTable.css";

const TABLE_HEADS = [
  "Brand Name",
  "Brand Email",
  "Phone Number",
  "Tax Registration Number",
  "National ID",
  "Action",
];

const TABLE_DATA = [
  {
    id: 1,
    brandName: "FashionCo",
    brandEmail: "info@fashionco.com",
    phoneNumber: "+1-202-555-0143",
    taxRegistrationNumber: "TRN-123456789",
    nationalId: "NID-987654321",
  },
  {
    id: 2,
    brandName: "TechieGear",
    brandEmail: "support@techiegear.com",
    phoneNumber: "+1-202-555-0153",
    taxRegistrationNumber: "TRN-234567890",
    nationalId: "NID-876543210",
  },
  {
    id: 3,
    brandName: "HomeDecor",
    brandEmail: "contact@homedecor.com",
    phoneNumber: "+1-202-555-0163",
    taxRegistrationNumber: "TRN-345678901",
    nationalId: "NID-765432109",
  },
  {
    id: 4,
    brandName: "KitchenPlus",
    brandEmail: "sales@kitchenplus.com",
    phoneNumber: "+1-202-555-0173",
    taxRegistrationNumber: "TRN-456789012",
    nationalId: "NID-654321098",
  },
  {
    id: 5,
    brandName: "OutdoorLife",
    brandEmail: "hello@outdoorlife.com",
    phoneNumber: "+1-202-555-0183",
    taxRegistrationNumber: "TRN-567890123",
    nationalId: "NID-543210987",
  },
  {
    id: 6,
    brandName: "GadgetWorld",
    brandEmail: "info@gadgetworld.com",
    phoneNumber: "+1-202-555-0193",
    taxRegistrationNumber: "TRN-678901234",
    nationalId: "NID-432109876",
  },
];

const SubscriptionRequestsTable = () => {
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
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.brandName}</td>
                  <td>{dataItem.brandEmail}</td>
                  <td>{dataItem.phoneNumber}</td>
                  <td>{dataItem.taxRegistrationNumber}</td>
                  <td>{dataItem.nationalId}</td>
                  <td className="dt-cell-action">
                    <SubscriptionRequestsAction />
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

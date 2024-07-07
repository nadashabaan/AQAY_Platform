import React, { useEffect, useState } from "react";
import "./AreaCards.css";
import AreaTextCard from "./AreaTextCard";

const AreaCardsA = () => {
  const [data, setData] = useState(null);
  const apiUrl = "http://aqay.runasp.net/api/AdminDashboard/statistics";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="content-area-cards">
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Total Revenue",
          value: `${data.totalRevenue} EGP`,
          text: "The revenue achieved by merchants through Aqay.",
        }}
      />
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Subscribed Merchants",
          value: data.subscriptionRequestCount,
          text: "The number of merchants that joined Aqay.",
        }}
      />
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Pending Merchants",
          value: data.pendingMerchantCount,
          text: "The number of merchants that are pending approval.",
        }}
      />
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Total Merchants",
          value: data.merchantCount,
          text: "The number of merchants who have joined Aqay but have not yet subscribe",
        }}
      />
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Total Consumers",
          value: data.consumerCount,
          text: "The number of consumers that joined Aqay.",
        }}
      />
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Completed Orders",
          value: data.completedOrdersCount,
          text: "The number of orders successfully completed on Aqay.",
        }}
      />
    </section>
  );
};

export default AreaCardsA;

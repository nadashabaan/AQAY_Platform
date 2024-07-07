import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AreaCards.css";
import AreaTextCard from "./AreaTextCard";
import { useUser } from "../../../context/UserContext";

const AreaCards = () => {
  const { brandId } = useUser();
  const [statistics, setStatistics] = useState({
    totalRevenue: 0,
    totalRevenueThisMonth: 0,
    completedOrdersCount: 0,
    pendingOrdersCount: 0,
    refundCount: 0,
    exchangeCount: 0,
  });

  useEffect(() => {
    if (!brandId) {
      console.log("Brand ID is not available");
      return;
    }

    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          `http://aqay.runasp.net/api/MerchantDashboard/statistics?brandId=${brandId}`
        );
        const data = response.data;
        setStatistics({
          totalRevenue: data.totalRevenue.toFixed(2),
          totalRevenueThisMonth: data.totalRevenueThisMonth.toFixed(2),
          completedOrdersCount: data.completedOrdersCount,
          pendingOrdersCount: data.pendingOrdersCount,
          refundCount: data.refundCount,
          exchangeCount: data.exchangeCount,
        });
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    };

    fetchStatistics();
  }, [brandId]); // Dependency on brandId to re-fetch when it changes

  return (
    <section className="content-area-cards">
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Total Sales",
          value: `${statistics.totalRevenue}`,
          text: "Total Sales generated.",
        }}
      />
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Total Sales This Month",
          value: `${statistics.totalRevenueThisMonth}`,
          text: "Total Sales generated this month.",
        }}
      />
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Completed Orders",
          value: `${statistics.completedOrdersCount}`,
          text: "The number of orders successfully completed.",
        }}
      />
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Pending Orders",
          value: `${statistics.pendingOrdersCount}`,
          text: "The number of orders awaiting action.",
        }}
      />
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Refund Requests",
          value: `${statistics.refundCount}`,
          text: "The number of refund requests received.",
        }}
      />
      <AreaTextCard
        colors={["#e4e8ef", "#4ce13f"]}
        cardInfo={{
          title: "Exchange Requests",
          value: `${statistics.exchangeCount}`,
          text: "The number of exchange requests received.",
        }}
      />
    </section>
  );
};

export default AreaCards;

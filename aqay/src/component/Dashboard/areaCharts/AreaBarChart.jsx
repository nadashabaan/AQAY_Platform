import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { useUser } from "../../../context/UserContext";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.css";

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);
  const { brandId } = useUser();
  const [chartData, setChartData] = useState([]);

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  useEffect(() => {
    if (!brandId) {
      console.log("No brand ID available");
      return;
    }

    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          `http://aqay.runasp.net/api/MerchantDashboard/statistics?brandId=${brandId}`
        );
        const { sixMonthRevenueList } = response.data;

        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const currentMonth = new Date().getMonth();
        const chartData = sixMonthRevenueList.$values.map((value, index) => {
          const monthIndex = (currentMonth - 5 + index + 12) % 12;
          return {
            Month: months[monthIndex],
            Revenue: value,
          };
        });
        setChartData(chartData);
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    };

    fetchStatistics();
  }, [brandId]);

  return (
    <div className="bar-chart">
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Month"
              tick={{ fill: theme === LIGHT_THEME ? "#676767" : "#f3f3f3" }}
            />
            <YAxis
              tick={{ fill: theme === LIGHT_THEME ? "#676767" : "#f3f3f3" }}
            />
            <Tooltip />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="Revenue"
              fill="#51d03f"
              barSize={20}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;

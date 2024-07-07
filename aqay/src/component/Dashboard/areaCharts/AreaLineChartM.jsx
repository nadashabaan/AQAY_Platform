import React, { useContext, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { ThemeContext } from "../../../context/ThemeContext";
import { useUser } from "../../../context/UserContext";
import { LIGHT_THEME } from "../../../constants/themeConstants";

const AreaLineChartM = () => {
  const { theme } = useContext(ThemeContext);
  const { brandId } = useUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!brandId) {
        console.log("No brand ID available");
        return;
      }
      try {
        const response = await axios.get(
          `http://aqay.runasp.net/api/MerchantDashboard/statistics?brandId=${brandId}`
        );
        const categoryData = response.data.categoryStatistics.$values.map(
          (item) => ({
            Category: item.category,
            Male: item.male,
            Female: item.female,
            TotalSales: item.totalSales,
          })
        );
        setData(categoryData);
      } catch (error) {
        console.error("Failed to fetch category statistics:", error);
      }
    };

    fetchData();
  }, [brandId]);

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="line-chart">
      <h4>Sales by Gender</h4>
      <div className="line-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Category"
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
            <Line type="monotone" dataKey="Female" stroke="#e8475b" />
            <Line type="monotone" dataKey="Male" stroke="#e88447" />
            <Line type="monotone" dataKey="TotalSales" stroke="#51d03f" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaLineChartM;

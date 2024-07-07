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
import { LIGHT_THEME } from "../../../constants/themeConstants";
import { useUser } from "../../../context/UserContext";

const AreaLineChartProductR = () => {
  const { theme } = useContext(ThemeContext);
  const { brandId } = useUser();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchProductRatings = async () => {
      if (!brandId) {
        console.log("Brand ID is missing");
        return;
      }
      try {
        const ratingsResponse = await axios.get(
          `http://aqay.runasp.net/api/MerchantDashboard/statistics?brandId=${brandId}`
        );
        const ratingsData = ratingsResponse.data.productRatings.$values;

        const chartDataPromises = ratingsData.map(async (rating) => {
          const productResponse = await axios.get(
            `http://aqay.runasp.net/api/Products/id?id=${rating.productId}`
          );
          return {
            Product: productResponse.data.name,
            averageRating: rating.averageRating,
          };
        });

        const resolvedChartData = await Promise.all(chartDataPromises);
        setChartData(resolvedChartData);
      } catch (error) {
        console.error("Failed to fetch product ratings or names:", error);
      }
    };

    fetchProductRatings();
  }, [brandId]);

  return (
    <div className="line-chart">
      <div className="line-chart-wrapper">
        <h4>Products Average Rating</h4>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
              dataKey="Product"
              tick={{ fill: theme === LIGHT_THEME ? "#676767" : "#f3f3f3" }}
            />
            <YAxis
              tick={{ fill: theme === LIGHT_THEME ? "#676767" : "#f3f3f3" }}
            />
            <Tooltip />
            <Legend verticalAlign="top" align="right" />
            <Line type="monotone" dataKey="averageRating" stroke="#51d03f" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaLineChartProductR;

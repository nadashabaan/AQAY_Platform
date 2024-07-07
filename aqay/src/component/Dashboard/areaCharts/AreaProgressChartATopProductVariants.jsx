import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.css";
const AreaProgressChartATopProductVariants = () => {
  const [data, setData] = useState(null);
  const { theme } = useContext(ThemeContext);
  const apiUrl = "http://aqay.runasp.net/api/AdminDashboard/statistics";
  const productApiUrl = "http://aqay.runasp.net/api/Products/id?id=";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();

        const topProductVariants = result.topProductVariants.$values;

        const productDetailsPromises = topProductVariants.map(
          async (variant) => {
            const productResponse = await fetch(
              `${productApiUrl}${variant.productVariantId}`
            );
            const productResult = await productResponse.json();
            return {
              id: variant.productVariantId,
              name: productResult.name,
              ordersCount: variant.ordersCount,
            };
          }
        );

        const productDetails = await Promise.all(productDetailsPromises);
        setData(productDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const totalOrders = data.reduce((acc, item) => acc + item.ordersCount, 0);
  const processedData = data.map((item) => ({
    id: item.id,
    name: item.name,
    percentValues: ((item.ordersCount / totalOrders) * 100).toFixed(2),
  }));

  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Sold Items</h4>
      </div>
      <div className="progress-bar-list">
        {processedData.map((progressbar) => (
          <div className="progress-bar-item" key={progressbar.id}>
            <div className="bar-item-info">
              <p className="bar-item-info-name">{progressbar.name}</p>
              <p className="bar-item-info-value">
                {progressbar.percentValues}%
              </p>
            </div>
            <div className="bar-item-full">
              <div
                className="bar-item-filled"
                style={{
                  width: `${progressbar.percentValues}%`,
                  backgroundColor: `${
                    theme === LIGHT_THEME ? "#4ce13f" : "#81FF76"
                  }`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaProgressChartATopProductVariants;

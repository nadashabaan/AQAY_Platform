import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { LIGHT_THEME } from "../../../constants/themeConstants";

const AreaProgressChartATopCategories = () => {
  const [data, setData] = useState(null);
  const { theme } = useContext(ThemeContext);
  const apiUrl = "http://aqay.runasp.net/api/AdminDashboard/statistics";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result.topCategories.$values);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const totalSales = data.reduce((acc, item) => acc + item.totalSales, 0);
  const processedData = data.map((item) => ({
    id: item.$id,
    name: item.categoryName,
    percentValues: ((item.totalSales / totalSales) * 100).toFixed(2),
  }));

  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Top Categories Sales</h4>
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
                    theme === LIGHT_THEME ? "#FF4747" : "#FF6060"
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

export default AreaProgressChartATopCategories;

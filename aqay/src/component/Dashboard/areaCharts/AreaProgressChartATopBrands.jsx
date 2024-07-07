import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { LIGHT_THEME } from "../../../constants/themeConstants";

const AreaProgressChartATopBrands = () => {
  const [data, setData] = useState(null);
  const [brandNames, setBrandNames] = useState({});
  const { theme } = useContext(ThemeContext);
  const apiUrl = "http://aqay.runasp.net/api/AdminDashboard/statistics";

  useEffect(() => {
    const fetchBrandNames = async (brandIds) => {
      const names = {};
      for (const id of brandIds) {
        try {
          const response = await fetch(
            `http://aqay.runasp.net/api/Brand/${id}`
          );
          const result = await response.json();
          names[id] = result.name;
        } catch (error) {
          console.error(`Error fetching brand name for ID ${id}:`, error);
        }
      }
      setBrandNames(names);
    };

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        const brandIds = result.topBrands.$values.map((brand) => brand.brandId);
        setData(result.topBrands.$values);
        fetchBrandNames(brandIds);
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
    name: brandNames[item.brandId] || `Brand ${item.brandId}`,
    percentValues: ((item.totalSales / totalSales) * 100).toFixed(2),
  }));

  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Brands Sales</h4>
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
                    theme === LIGHT_THEME ? "#FF9B48" : "#FFB476"
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

export default AreaProgressChartATopBrands;

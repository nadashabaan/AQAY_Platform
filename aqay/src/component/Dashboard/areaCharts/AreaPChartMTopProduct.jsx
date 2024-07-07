import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useUser } from "../../../context/UserContext";

const AreaPChartMTopProduct = () => {
  const [topProductVariants, setTopProductVariants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { brandId } = useUser();

  useEffect(() => {
    const fetchTopProductVariants = async () => {
      if (!brandId) {
        setError("Brand ID is missing");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://aqay.runasp.net/api/MerchantDashboard/statistics?brandId=${brandId}`
        );
        const variants = response.data.topProductVariants.$values;
        const variantDetails = await Promise.all(
          variants.map(async (variant) => {
            const productResponse = await axios.get(
              `http://aqay.runasp.net/api/Products/id?id=${variant.productVariantId}`
            );
            return {
              id: variant.productVariantId,
              name: productResponse.data.name,
              ordersCount: variant.ordersCount,
            };
          })
        );
        setTopProductVariants(variantDetails);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product variants:", error.message);
        setError("Failed to load product variants");
        setLoading(false);
      }
    };

    fetchTopProductVariants();
  }, [brandId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Sold Items</h4>
      </div>
      <div className="progress-bar-list">
        {topProductVariants.map((variant) => (
          <div className="progress-bar-item" key={variant.id}>
            <div className="bar-item-info">
              <p className="bar-item-info-name">{variant.name}</p>
              <p className="bar-item-info-value">{variant.ordersCount}</p>
            </div>
            <div className="bar-item-full">
              <div
                className="bar-item-filled"
                style={{
                  width: `${Math.min(100, (variant.ordersCount / 4) * 100)}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaPChartMTopProduct;

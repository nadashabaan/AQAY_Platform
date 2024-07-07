// import React, { useContext } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { ThemeContext } from "../../../context/ThemeContext";
// import { LIGHT_THEME } from "../../../constants/themeConstants";

// const AreaLinChartAFM = () => {
//   const [data, setData] = useState(null);
//   const { theme } = useContext(ThemeContext);
//   const apiUrl = "http://aqay.runasp.net/api/AdminDashboard/statistics";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }
//   const formatLegendValue = (value) => {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   };

//   return (
//     <div className="line-chart">
//       <div className="line-chart-wrapper">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="Category" />
//             <YAxis />
//             <Tooltip />
//             <Legend
//               iconType="circle"
//               iconSize={10}
//               verticalAlign="top"
//               align="right"
//               formatter={formatLegendValue}
//             />
//             <Line type="monotone" dataKey="Female" stroke="#e8475b" />
//             <Line type="monotone" dataKey="Male" stroke="#e88447" />
//             <Line type="monotone" dataKey="TotalSales" stroke="#51d03f" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AreaLinChartAFM;
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
import { ThemeContext } from "../../../context/ThemeContext";
import { LIGHT_THEME } from "../../../constants/themeConstants";

const AreaLineChartAFM = () => {
  const [data, setData] = useState(null);
  const { theme } = useContext(ThemeContext);
  const apiUrl = "http://aqay.runasp.net/api/AdminDashboard/statistics";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result.categoryStatistics.$values);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const processedData = data.map((item) => ({
    Category: item.category,
    Female: item.female,
    Male: item.male,
    TotalSales: item.totalSales,
  }));

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="line-chart">
      <div className="line-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={processedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Category" />
            <YAxis />
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

export default AreaLineChartAFM;

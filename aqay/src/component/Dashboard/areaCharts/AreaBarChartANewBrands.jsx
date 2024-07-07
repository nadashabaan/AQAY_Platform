// import { useContext } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { ThemeContext } from "../../../context/ThemeContext";
// import { FaArrowUpLong } from "react-icons/fa6";
// import { LIGHT_THEME } from "../../../constants/themeConstants";
// import "./AreaCharts.css";

// const [data, setData] = useState(null);
// const apiUrl = "http://aqay.runasp.net/api/AdminDashboard/statistics";

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(apiUrl);
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, []);

// if (!data) {
//   return <div>Loading...</div>;
// }
// const AreaBarChartANewBrands = () => {
//   const { theme } = useContext(ThemeContext);

//   const formatTooltipValue = (value) => {
//     return `${value} Brands Newly Joined`;
//   };

//   const formatYAxisLabel = (value) => {
//     return `${value}`;
//   };

//   const formatLegendValue = (value) => {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   };

//   return (
//     <div className="bar-chart">
//       <div className="bar-chart-info">
//         <h5 className="bar-chart-title">Number of Brands Newly Joined</h5>
//         <div className="chart-info-data">
//           <div className="info-data-text"></div>
//         </div>
//       </div>
//       <div className="bar-chart-wrapper">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={500}
//             height={200}
//             data={data}
//             margin={{
//               top: 5,
//               right: 5,
//               left: 0,
//               bottom: 5,
//             }}
//           >
//             <XAxis
//               padding={{ left: 10 }}
//               dataKey="Month"
//               tickSize={0}
//               axisLine={false}
//               tick={{
//                 fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
//                 fontSize: 14,
//               }}
//             />
//             <YAxis
//               padding={{ bottom: 10, top: 10 }}
//               tickFormatter={formatYAxisLabel}
//               tickCount={6}
//               axisLine={false}
//               tickSize={0}
//               tick={{
//                 fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
//               }}
//             />
//             <Tooltip
//               formatter={formatTooltipValue}
//               cursor={{ fill: "transparent" }}
//             />
//             <Legend
//               iconType="circle"
//               iconSize={10}
//               verticalAlign="top"
//               align="right"
//               formatter={formatLegendValue}
//             />
//             <Bar
//               dataKey="Count"
//               fill="#e8475b"
//               activeBar={false}
//               isAnimationActive={false}
//               barSize={24}
//               radius={[4, 4, 4, 4]}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default AreaBarChartANewBrands;
import React, { useContext, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.css";

const AreaBarChartANewBrands = () => {
  const [data, setData] = useState(null);
  const { theme } = useContext(ThemeContext);
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

  const months = ["Jun", "May", "Apr", "Mar", "Feb", "Jan"];

  const processedData = data.newBrandsPerMonth.$values.map((count, index) => ({
    Month: months[index],
    Count: count,
  }));

  const formatTooltipValue = (value) => {
    return `${value} Brands Newly Joined`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Number of Brands Newly Joined</h5>
        <div className="chart-info-data">
          <div className="info-data-text"></div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={processedData}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="Month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="Count"
              fill="#e8475b"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChartANewBrands;

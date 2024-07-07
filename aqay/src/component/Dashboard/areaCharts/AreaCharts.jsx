import AreaBarChart from "./AreaBarChart";
import AreaProgressChartCategories from "./AreaProgressChartCategories";
import AreaPChartMTopProduct from "./AreaPChartMTopProduct";
import AreaLineChartM from "./AreaLineChartM";
import AreaLineChartProductR from "./AreaLineChartProductR";

const AreaCharts = () => {
  return (
    <section className="content-area-charts">
      <AreaLineChartM />
      <AreaPChartMTopProduct />
      <AreaLineChartProductR />
      <br />
      <h1></h1>
      <br />
      <AreaBarChart />
    </section>
  );
};

export default AreaCharts;

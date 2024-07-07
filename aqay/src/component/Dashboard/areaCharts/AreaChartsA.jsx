import AreaBarChartANewBrands from "./AreaBarChartANewBrands";
import AreaLinChartAFM from "./AreaLinChartAFM";
import AreaProgressChartATopBrands from "./AreaProgressChartATopBrands";
import AreaProgressChartATopCategories from "./AreaProgressChartATopCategories";
import AreaProgressChartATopProductVariants from "./AreaProgressChartATopProductVariants";

const AreaChartsA = () => {
  return (
    <section className="content-area-charts">
      <AreaBarChartANewBrands />
      {/* <br /> */}
      <AreaProgressChartATopProductVariants />
      <AreaLinChartAFM />
      <AreaProgressChartATopCategories />
      <AreaProgressChartATopBrands />
    </section>
  );
};

export default AreaChartsA;

import { useContext, useEffect } from "react";
import "../CSS/DashboardM.css";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { ImSun } from "react-icons/im";
import { CgMoon } from "react-icons/cg";
import AreaTop from "../component/Dashboard/areaTop/AreaTop";
import AreaCardsA from "../component/Dashboard/areaCards/AreaCardsA";
import AreaChartsA from "../component/Dashboard/areaCharts/AreaChartsA";
import SubscriptionRequestsTable from "../component/Dashboard/areaTable/SubscriptionRequestsTable";

const DashboardA = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <AreaTop />
      <AreaCardsA />
      <AreaChartsA />
      {/* <SubscriptionRequestsTable /> */}
      <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === LIGHT_THEME ? (
          <ImSun className="theme-icon" />
        ) : (
          <CgMoon className="theme-icon" />
        )}
      </button>
    </>
  );
};

export default DashboardA;

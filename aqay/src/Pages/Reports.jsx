import { useContext, useEffect } from "react";
import "../CSS/DashboardM.css";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { ImSun } from "react-icons/im";
import { CgMoon } from "react-icons/cg";

import ReportsTable from "../component/Dashboard/areaTable/ReportsTable";
const Reports = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return (
    <>
      <ReportsTable />
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

export default Reports;

import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CiShop } from "react-icons/ci";
import { LuUserCog2 } from "react-icons/lu";
import {
  MdDiversity2,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
} from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import "./SidebarD.css";
import { SidebarContextD } from "../../context/SidebarContextD";
import logo from "../../assets/Images/logo.png";
import { IoStatsChartOutline } from "react-icons/io5";
import LogOut from "../../Pages/LogOut";
const SidebarDA = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContextD);
  const navbarRef = useRef(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-open-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img className="h-10 w-auto" src={logo} alt="Logo" />
          <span className="sidebar-brand-text">Aqay Administration</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="menu-link-content">
          <span className="menu-link-icon">
            <MdOutlineGridView size={30} />
          </span>
          <span className="menu-link-text">Dashboard</span>
        </div>
        <br />
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link
                to="/DashboardA"
                className={`menu-link ${
                  activeLink === "/DashboardA" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/DashboardA")}
              >
                <span className="menu-link-icon">
                  <IoStatsChartOutline size={24} />
                </span>
                <span className="menu-link-text">Statistics</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/SubReq"
                className={`menu-link ${
                  activeLink === "/SubReq" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/SubReq")}
              >
                <span className="menu-link-icon">
                  <MdDiversity2 size={24} />
                </span>
                <span className="menu-link-text">Subscription Requests</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/ManageAcc"
                className={`menu-link ${
                  activeLink === "/ManageAcc" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/ManageAcc")}
              >
                <span className="menu-link-icon">
                  <LuUserCog2 size={24} />
                </span>
                <span className="menu-link-text">Manage Accounts</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/Reports"
                className={`menu-link ${
                  activeLink === "/Reports" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/Reports")}
              >
                <span className="menu-link-icon">
                  <MdOutlineMessage size={24} />
                </span>
                <span className="menu-link-text">Reports</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="/manageCat"
                className={`menu-link ${
                  activeLink === "/manageCat" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/manageCat")}
              >
                <span className="menu-link-icon">
                  <TbCategory2 size={24} />
                </span>
                <span className="menu-link-text">Manage Categories</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link
                to="/SignIn"
                className={`menu-link ${
                  activeLink === "SignIn" ? "active" : ""
                }`}
                onClick={() => setActiveLink("/")}
              >
                <span className="menu-link-icon">
                  <MdOutlineLogout size={24} />
                </span>
                <span className="menu-link-text">
                  <LogOut />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SidebarDA;

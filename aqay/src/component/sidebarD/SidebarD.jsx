import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import { BsShopWindow } from "react-icons/bs";
import { IoStatsChartOutline } from "react-icons/io5";
import {
  MdOutlineClose,
  MdOutlineGridView,
  MdOutlineLogout,
} from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiOutlineRefresh } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./SidebarD.css";
import { SidebarContextD } from "../../context/SidebarContextD";
import logo from "../../assets/Images/logo.png";

const SidebarD = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContextD);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
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

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img className="h-10 w-auto" src={logo} />
          <span className="sidebar-brand-text">Brandname</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <div className="menu-link active">
                <span className="menu-link-icon">
                  <MdOutlineGridView size={30} />
                </span>
                <span className="sidebar-brand-text">Dashboard</span>
              </div>
            </li>
            <li className="menu-item">
              <Link to="/DashboardM" className="menu-link">
                <span className="menu-link-icon">
                  <IoStatsChartOutline size={24} />
                </span>
                <span className="menu-link-text">Statistics</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/storeFront" className="menu-link">
                <span className="menu-link-icon">
                  <BsShopWindow size={24} />
                </span>
                <span className="menu-link-text">Front Store</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/orders" className="menu-link">
                <span className="menu-link-icon">
                  <HiOutlineClipboardList size={24} />
                </span>
                <span className="menu-link-text">Orders</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/Requests" className="menu-link">
                <span className="menu-link-icon">
                  <HiOutlineRefresh size={24} />
                </span>
                <span className="menu-link-text">Requests</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/addProuduct" className="menu-link">
                <span className="menu-link-icon">
                  <GrAddCircle size={24} />
                </span>
                <span className="menu-link-text">Add new product </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/merchantProfile" className="menu-link">
                <span className="menu-link-icon">
                  <CgProfile size={24} />
                </span>
                <span className="menu-link-text">Profile</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={24} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SidebarD;

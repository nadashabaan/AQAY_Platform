import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import { CiShop } from "react-icons/ci";
import { LuUserCog2 } from "react-icons/lu";

import {
  MdDiversity1,
  MdDiversity2,
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";

import { Link } from "react-router-dom";
import "./SidebarD.css";
import { SidebarContextD } from "../../context/SidebarContextD";

const SidebarDA = () => {
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
          <CiShop size={36} />
          <span className="sidebar-brand-text">Brandname.</span>
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
              <Link to="/DashboardA" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={24} />
                </span>
                <span className="menu-link-text">Statistics</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/SubReq" className="menu-link">
                <span className="menu-link-icon">
                  {/* <MdOutlineAttachMoney size={24} /> */}
                  <MdDiversity2 size={24} />
                </span>
                <span className="menu-link-text">Subscription Requests</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/ManageAcc" className="menu-link">
                <span className="menu-link-icon">
                  <LuUserCog2 size={24} />
                </span>
                <span className="menu-link-text">Manage Accounts</span>
              </Link>
            </li>

            <li className="menu-item">
              <Link to="/Reports" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineMessage size={24} />
                </span>
                <span className="menu-link-text">Reports</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/manageCat" className="menu-link">
                <span className="menu-link-icon">
                  <TbCategory2 size={24} />
                </span>
                <span className="menu-link-text">Manage Categories </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
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

export default SidebarDA;

import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BsShopWindow } from "react-icons/bs";
import { IoStatsChartOutline } from "react-icons/io5";
import ReportModal from "../ReportModal";
import {
  MdOutlineClose,
  MdOutlineGridView,
  MdOutlineLogout,
} from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { GrAddCircle } from "react-icons/gr";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiOutlineRefresh } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import "./SidebarD.css";
import { SidebarContextD } from "../../context/SidebarContextD";
import logo from "../../assets/Images/logo.png";
import LogOut from "../../Pages/LogOut";

const SidebarD = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContextD);
  const navbarRef = useRef(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isReportModalOpen, setReportModalOpen] = useState(false);
  const openReportModal = () => {
    setReportModalOpen(true);
    setDropdownOpen(false);
  };

  const closeReportModal = () => {
    setReportModalOpen(false);
  };

  const handleReportSubmit = (title, description) => {
    console.log("Report submitted:", { title, description });
    setReportModalOpen(false);
  };
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
    <>
      {" "}
      <nav
        className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
        ref={navbarRef}
      >
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
            <span className="sidebar-brand-text">Brandname</span>
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
                  to="/DashboardM"
                  className={`menu-link ${
                    activeLink === "/DashboardM" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("/DashboardM")}
                >
                  <span className="menu-link-icon">
                    <IoStatsChartOutline size={24} />
                  </span>
                  <span className="menu-link-text">Statistics</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/storeFront"
                  className={`menu-link ${
                    activeLink === "/storeFront" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("/storeFront")}
                >
                  <span className="menu-link-icon">
                    <BsShopWindow size={24} />
                  </span>
                  <span className="menu-link-text">Front Store</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  to="/orders"
                  className={`menu-link ${
                    activeLink === "/orders" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("/orders")}
                >
                  <span className="menu-link-icon">
                    <HiOutlineClipboardList size={24} />
                  </span>
                  <span className="menu-link-text">Orders</span>
                </Link>
              </li>

              <li className="menu-item">
                <Link
                  to="/addProuduct"
                  className={`menu-link ${
                    activeLink === "/addProuduct" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("/addProuduct")}
                >
                  <span className="menu-link-icon">
                    <GrAddCircle size={24} />
                  </span>
                  <span className="menu-link-text">Add new product</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-menu sidebar-menu2">
            <ul className="menu-list">
              <li className="menu-item">
                <Link
                  to="/merchantProfile"
                  className={`menu-link ${
                    activeLink === "/merchantProfile" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("/merchantProfile")}
                >
                  <span className="menu-link-icon">
                    <CgProfile size={24} />
                  </span>
                  <span className="menu-link-text">Profile</span>
                </Link>
              </li>
              <li className="menu-item">
                <button
                  className={`menu-link ${
                    activeLink === "/storeFront" ? "active" : ""
                  }`}
                  onClick={openReportModal}
                >
                  <TbMessageReport size={24} />
                  <div className="menu-link-text">Report</div>
                </button>
              </li>
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
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={closeReportModal}
        onSubmit={handleReportSubmit}
      />
    </>
  );
};

export default SidebarD;

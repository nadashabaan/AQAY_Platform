import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import {
  RiHistoryLine,
  RiSettings3Line,
  RiLogoutBoxLine,
} from "react-icons/ri";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Initially, the sidebar is closed.

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the open/close state of the sidebar
  };

  return (
    <>
      <RiArrowRightSLine
        className="text-2xl cursor-pointer fixed top-5 left-5 z-50"
        onClick={toggleSidebar}
      />
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-orange-100 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <RiArrowLeftSLine
          className="text-2xl cursor-pointer"
          onClick={toggleSidebar}
        />
        <div className="border-t border-orange-500">
          <NavLink
            to="/orders-history"
            className="flex items-center p-4 hover:bg-orange-200"
            onClick={toggleSidebar} // Close sidebar when link is clicked
          >
            <RiHistoryLine className="text-xl" />
            <span className="ml-4">Orders History</span>
          </NavLink>
          <NavLink
            to="/settings"
            className="flex items-center p-4 hover:bg-orange-200"
            onClick={toggleSidebar} // Close sidebar when link is clicked
          >
            <RiSettings3Line className="text-xl" />
            <span className="ml-4">Settings</span>
          </NavLink>
          <NavLink
            to="/logout"
            className="flex items-center p-4 hover:bg-orange-200"
            onClick={toggleSidebar} // Close sidebar when link is clicked
          >
            <RiLogoutBoxLine className="text-xl" />
            <span className="ml-4">Log Out</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;

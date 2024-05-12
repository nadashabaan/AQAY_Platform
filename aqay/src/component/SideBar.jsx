import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowLeftSLine, RiMenuLine } from "react-icons/ri";
import {
  RiHistoryLine,
  RiSettings3Line,
  RiLogoutBoxLine,
} from "react-icons/ri";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full z-50">
        <div
          className={`fixed top-0 left-0 h-full w-full bg-orange-100 opacity-50 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={closeSidebar} // Close sidebar when overlay is clicked
        ></div>
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-orange-100 shadow z-50 transform transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <div className="mr-2">
                <RiMenuLine
                  className="text-2xl cursor-pointer"
                  onClick={toggleSidebar}
                />
              </div>
              <span className="text-xl font-bold">Sidebar</span>
            </div>
            <div className="ml-2">
              <RiArrowLeftSLine
                className={`text-2xl cursor-pointer ${
                  isOpen ? "block" : "hidden"
                }`}
                onClick={toggleSidebar}
              />
            </div>
          </div>
          <div className="border-t border-orange-500">
            <NavLink
              to="/orders-history"
              className="flex items-center p-4 hover:bg-orange-200"
              onClick={closeSidebar} // Close sidebar when link is clicked
            >
              <RiHistoryLine className="text-xl" />
              <span className="ml-4">Orders History</span>
            </NavLink>
            <NavLink
              to="/settings"
              className="flex items-center p-4 hover:bg-orange-200"
              onClick={closeSidebar} // Close sidebar when link is clicked
            >
              <RiSettings3Line className="text-xl" />
              <span className="ml-4">Settings</span>
            </NavLink>
            <NavLink
              to="/logout"
              className="flex items-center p-4 hover:bg-orange-200"
              onClick={closeSidebar} // Close sidebar when link is clicked
            >
              <RiLogoutBoxLine className="text-xl" />
              <span className="ml-4">Log Out</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  RiSearchLine,
  RiChat1Line,
  RiUserLine,
  RiShoppingCartLine,
  RiHeartLine,
} from "react-icons/ri";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white  hover:bg-orange-200 hover:text-white rounded-md px-3 py-2";

  const iconStyle = { color: "black" };

  return (
    <>
      <nav className="bg-orange-100 border-b border-orange-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-orange-600 text-2xl font-red-rose ml-2 ">
                AQAY
              </span>
            </NavLink>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-black rounded-md leading-5 bg-orange-100 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm "
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <RiSearchLine className="h-5 w-5 text-gray-400" />{" "}
              </div>
            </div>
          </div>

          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <NavLink to="/PersonalInfo" className={linkClass}>
                <RiUserLine className="h-6 w-6" style={iconStyle} />
              </NavLink>
              <NavLink to="/Cart" className={linkClass}>
                <RiShoppingCartLine className="h-6 w-6" style={iconStyle} />
              </NavLink>
              <NavLink to="/WishList" className={linkClass}>
                <RiHeartLine className="h-6 w-6" style={iconStyle} />
              </NavLink>
              <NavLink to="/Chat" className={linkClass}>
                <RiChat1Line className="h-6 w-6" style={iconStyle} />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

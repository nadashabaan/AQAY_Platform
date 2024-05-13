import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RiStore2Line } from "react-icons/ri";
import logo from "../assets/Images/logo.png";

const NavbarM = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-orange-300 text-white hover:bg-orange-300 hover:text-white rounded-md px-3 py-2"
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

          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <NavLink to="/view" className={linkClass}>
                <RiStore2Line className="h-6 w-6" style={iconStyle} />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarM;

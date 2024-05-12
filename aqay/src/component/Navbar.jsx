// import { NavLink } from "react-router-dom";
// import logo from "../assets/Images/logo.png";
// const Navbar = () => {
//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
//       : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
//   return (
//     <>
//       <nav className="bg-orange-100 border-b border-orange-500">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="flex h-20 items-center justify-between">
//             <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
//               {/* <!-- Logo --> */}
//               <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
//                 <img className="h-10 w-auto" src={logo} alt="React Jobs" />
//                 <span className="hidden md:block text-orange-600 text-2xl font-red-rose ml-2 ">
//                   AQAY
//                 </span>
//               </NavLink>
//               <div className="md:ml-auto">
//                 <div className="flex space-x-2">
//                   <NavLink to="/" className={linkClass}>
//                     Home
//                   </NavLink>
//                   <NavLink to="/jobs" className={linkClass}>
//                     Jobs
//                   </NavLink>
//                   <NavLink to="/add-job" className={linkClass}>
//                     Add Job
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";
import { useState } from "react"; // Import useState hook
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <nav className="bg-orange-100 border-b border-orange-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* <!-- Logo --> */}
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block text-orange-600 text-2xl font-red-rose ml-2 ">
                  AQAY
                </span>
              </NavLink>
              {/* Search Input */}
              <div className="Search">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-orange-100 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm "
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 10a2 2 0 114 0 2 2 0 01-4 0zm7.293 2.293a1 1 0 01-1.414 1.414l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 111.414 1.414L13.414 10l1.879 1.879z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {/* End of Search Input */}
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={linkClass}>
                    Jobs
                  </NavLink>
                  <NavLink to="/add-job" className={linkClass}>
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

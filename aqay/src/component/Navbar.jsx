// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { TbMessageReport } from "react-icons/tb";
// import {
//   RiSearchLine,
//   RiChat1Line,
//   RiUserLine,
//   RiShoppingCartLine,
//   RiHeartLine,
//   RiMore2Fill,
//   RiHistoryLine,
//   RiLogoutBoxLine,
// } from "react-icons/ri";
// import logo from "../assets/Images/logo.png";
// import ReportModal from "./ReportModal";

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isReportModalOpen, setReportModalOpen] = useState(false);

//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "bg-orange-200 text-white hover:bg-orange-500 hover:text-white rounded-md px-3 py-2"
//       : "text-white hover:bg-orange-200 hover:text-white rounded-md px-3 py-2";

//   const iconStyle = { color: "black" };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const openReportModal = () => {
//     setReportModalOpen(true);
//     setDropdownOpen(false);
//   };

//   const closeReportModal = () => {
//     setReportModalOpen(false);
//   };

//   const handleReportSubmit = (title, description) => {
//     console.log("Report submitted:", { title, description });
//     setReportModalOpen(false);
//   };

//   return (
//     <>
//       <nav className="bg-orange-100 border-b border-orange-500">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
//           <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
//             <NavLink
//               className="flex flex-shrink-0 items-center mr-4"
//               to="/home"
//             >
//               <img className="h-10 w-auto" src={logo} alt="AQAY Logo" />
//               <span className="hidden md:block text-orange-600 text-2xl font-red-rose ml-2 ">
//                 AQAY
//               </span>
//             </NavLink>
//           </div>
//           <div className="flex flex-1 items-center justify-center">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="block w-full pl-10 pr-3 py-2 border border-black rounded-md leading-5 bg-orange-100 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//               />
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <RiSearchLine className="h-5 w-5 text-gray-400" />
//               </div>
//             </div>
//           </div>
//           <div className="md:ml-auto flex items-center space-x-2">
//             <NavLink to="/PersonalInfo" className={linkClass}>
//               <RiUserLine className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <NavLink to="/Cart" className={linkClass}>
//               <RiShoppingCartLine className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <NavLink to="/WishList" className={linkClass}>
//               <RiHeartLine className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <NavLink to="/Chat" className={linkClass}>
//               <RiChat1Line className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="text-black hover:bg-orange-200 rounded-md p-2"
//               >
//                 <RiMore2Fill className="h-6 w-6" />
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2">
//                   <NavLink
//                     to="/OrderHistory"
//                     className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     onClick={() => setDropdownOpen(false)}
//                   >
//                     <RiHistoryLine className="mr-2" /> Order History
//                   </NavLink>
//                   <button
//                     className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     onClick={openReportModal}
//                   >
//                     <TbMessageReport className="mr-2" />
//                     Report
//                   </button>
//                   <button
//                     className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     onClick={() => {
//                       setDropdownOpen(false);
//                     }}
//                   >
//                     <RiLogoutBoxLine className="mr-2" />
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//       <ReportModal
//         isOpen={isReportModalOpen}
//         onClose={closeReportModal}
//         onSubmit={handleReportSubmit}
//       />
//     </>
//   );
// };

// export default Navbar;
//nav old

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { TbMessageReport } from "react-icons/tb";
// import {
//   RiSearchLine,
//   RiChat1Line,
//   RiUserLine,
//   RiShoppingCartLine,
//   RiHeartLine,
//   RiMore2Fill,
//   RiHistoryLine,
//   RiLogoutBoxLine,
// } from "react-icons/ri";
// import logo from "../assets/Images/logo.png";
// import ReportModal from "./ReportModal";
// import axios from "axios";

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isReportModalOpen, setReportModalOpen] = useState(false);

//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "bg-orange-200 text-white hover:bg-orange-500 hover:text-white rounded-md px-3 py-2"
//       : "text-white hover:bg-orange-200 hover:text-white rounded-md px-3 py-2";

//   const iconStyle = { color: "black" };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const openReportModal = () => {
//     setReportModalOpen(true);
//     setDropdownOpen(false);
//   };

//   const closeReportModal = () => {
//     setReportModalOpen(false);
//   };

//   const handleReportSubmit = (title, description) => {
//     console.log("Report submitted:", { title, description });
//     setReportModalOpen(false);
//   };

//   const handleSearch = async () => {
//     if (searchQuery.trim()) {
//       try {
//         const response = await axios.get(
//           `http://aqay.runasp.net/api/Products/name`,
//           {
//             params: { name: searchQuery },
//           }
//         );
//         console.log("Search results:", response.data);
//       } catch (error) {
//         console.error("Failed to fetch search results:", error);
//       }
//     }
//   };

//   return (
//     <>
//       <nav className="bg-orange-100 border-b border-orange-500">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
//           <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
//             <NavLink
//               className="flex flex-shrink-0 items-center mr-4"
//               to="/home"
//             >
//               <img className="h-10 w-auto" src={logo} alt="AQAY Logo" />
//               <span className="hidden md:block text-orange-600 text-2xl font-red-rose ml-2">
//                 AQAY
//               </span>
//             </NavLink>
//             <div className="flex flex-1 items-center justify-center">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && handleSearch()}
//                   className="block w-full pl-10 pr-3 py-2 border border-black rounded-md leading-5 bg-orange-100 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//                 />
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <RiSearchLine className="h-5 w-5 text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:ml-auto flex items-center space-x-2">
//             <NavLink to="/PersonalInfo" className={linkClass}>
//               <RiUserLine className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <NavLink to="/Cart" className={linkClass}>
//               <RiShoppingCartLine className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <NavLink to="/WishList" className={linkClass}>
//               <RiHeartLine className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <NavLink to="/Chat" className={linkClass}>
//               <RiChat1Line className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="text-black hover:bg-orange-200 rounded-md p-2"
//               >
//                 <RiMore2Fill className="h-6 w-6" />
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2">
//                   <NavLink
//                     to="/OrderHistory"
//                     className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     onClick={() => setDropdownOpen(false)}
//                   >
//                     <RiHistoryLine className="mr-2" /> Order History
//                   </NavLink>
//                   <button
//                     className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     onClick={openReportModal}
//                   >
//                     <TbMessageReport className="mr-2" />
//                     Report
//                   </button>
//                   <button
//                     className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     onClick={() => {
//                       setDropdownOpen(false);
//                     }}
//                   >
//                     <RiLogoutBoxLine className="mr-2" />
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//       <ReportModal
//         isOpen={isReportModalOpen}
//         onClose={closeReportModal}
//         onSubmit={handleReportSubmit}
//       />
//     </>
//   );
// };

// export default Navbar;

///lastttt

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { TbMessageReport } from "react-icons/tb";
// import {
//   RiSearchLine,
//   RiChat1Line,
//   RiUserLine,
//   RiShoppingCartLine,
//   RiHeartLine,
//   RiMore2Fill,
//   RiHistoryLine,
//   RiLogoutBoxLine,
// } from "react-icons/ri";
// import logo from "../assets/Images/logo.png";
// import ReportModal from "./ReportModal"; // Ensure you have this component
// import axios from "axios";

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isReportModalOpen, setReportModalOpen] = useState(false);

//   const linkClass = ({ isActive }) =>
//     isActive
//       ? "bg-orange-200 text-white hover:bg-orange-500 hover:text-white rounded-md px-3 py-2"
//       : "text-white hover:bg-orange-200 hover:text-white rounded-md px-3 py-2";

//   const iconStyle = { color: "black" };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const openReportModal = () => {
//     setReportModalOpen(true);
//     setDropdownOpen(false);
//   };

//   const closeReportModal = () => {
//     setReportModalOpen(false);
//   };

//   const handleReportSubmit = (title, description) => {
//     console.log("Report submitted:", { title, description });
//     setReportModalOpen(false);
//   };

//   const handleSearch = async () => {
//     if (searchQuery.trim()) {
//       try {
//         const response = await axios.get(
//           `http://aqay.runasp.net/api/Products/name`,
//           {
//             params: { name: searchQuery },
//           }
//         );
//         console.log("Search results:", response.data);
//       } catch (error) {
//         console.error("Failed to fetch search results:", error);
//       }
//     }
//   };

//   return (
//     <>
//       <nav className="bg-orange-100 border-b border-orange-500">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
//           <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
//             <NavLink
//               className="flex flex-shrink-0 items-center mr-4"
//               to="/home"
//             >
//               <img className="h-10 w-auto" src={logo} alt="AQAY Logo" />
//               <span className="hidden md:block text-orange-600 text-2xl font-red-rose ml-2">
//                 AQAY
//               </span>
//             </NavLink>
//             <div className="flex flex-1 items-center justify-center">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && handleSearch()}
//                   className="block w-full pl-10 pr-3 py-2 border border-black rounded-md leading-5 bg-orange-100 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
//                 />
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <RiSearchLine className="h-5 w-5 text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:ml-auto flex items-center space-x-2">
//             <NavLink to="/PersonalInfo" className={linkClass}>
//               <RiUserLine className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <NavLink to="/Cart" className={linkClass}>
//               <RiShoppingCartLine className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <NavLink to="/WishList" className={linkClass}>
//               <RiHeartLine className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <NavLink to="/Chat" className={linkClass}>
//               <RiChat1Line className="h-6 w-6" style={iconStyle} />
//             </NavLink>
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="text-black hover:bg-orange-200 rounded-md p-2"
//               >
//                 <RiMore2Fill className="h-6 w-6" />
//               </button>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2">
//                   <NavLink
//                     to="/OrderHistory"
//                     className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     onClick={() => setDropdownOpen(false)}
//                   >
//                     <RiHistoryLine className="mr-2" /> Order History
//                   </NavLink>
//                   <button
//                     className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     onClick={openReportModal}
//                   >
//                     <TbMessageReport className="mr-2" />
//                     Report
//                   </button>
//                   <button
//                     className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     onClick={() => {
//                       setDropdownOpen(false);
//                     }}
//                   >
//                     <RiLogoutBoxLine className="mr-2" />
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//       <ReportModal
//         isOpen={isReportModalOpen}
//         onClose={closeReportModal}
//         onSubmit={handleReportSubmit}
//       />
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbMessageReport } from "react-icons/tb";
import {
  RiSearchLine,
  RiChat1Line,
  RiUserLine,
  RiShoppingCartLine,
  RiHeartLine,
  RiMore2Fill,
  RiHistoryLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import logo from "../assets/Images/logo.png";
import ReportModal from "./ReportModal";
import axios from "axios";
import ProductB from "./ProductB"; // Import ProductB component

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isReportModalOpen, setReportModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]); // State for search results

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-orange-200 text-white hover:bg-orange-500 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-orange-200 hover:text-white rounded-md px-3 py-2";

  const iconStyle = { color: "black" };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        const response = await axios.get(
          `http://aqay.runasp.net/api/Products/name`,
          {
            params: { name: searchQuery },
          }
        );
        console.log("Search results:", response.data);
        setSearchResults(response.data.$values); // Update search results state
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      }
    }
  };

  return (
    <>
      <nav className="bg-orange-100 border-b border-orange-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink
              className="flex flex-shrink-0 items-center mr-4"
              to="/home"
            >
              <img className="h-10 w-auto" src={logo} alt="AQAY Logo" />
              <span className="hidden md:block text-orange-600 text-2xl font-red-rose ml-2">
                AQAY
              </span>
            </NavLink>
            <div className="flex flex-1 items-center justify-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="block w-full pl-10 pr-3 py-2 border border-black rounded-md leading-5 bg-orange-100 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiSearchLine className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:ml-auto flex items-center space-x-2">
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
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black hover:bg-orange-200 rounded-md p-2"
              >
                <RiMore2Fill className="h-6 w-6" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2">
                  <NavLink
                    to="/OrderHistory"
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <RiHistoryLine className="mr-2" /> Order History
                  </NavLink>
                  <button
                    className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={openReportModal}
                  >
                    <TbMessageReport className="mr-2" />
                    Report
                  </button>
                  <button
                    className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => {
                      setDropdownOpen(false);
                    }}
                  >
                    <RiLogoutBoxLine className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={closeReportModal}
        onSubmit={handleReportSubmit}
      />
      {/* Render search results */}
      <div className="max-w-7xl mx-auto mt-4 px-2 sm:px-6 lg:px-8">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((product) => (
              <ProductB key={product.id} product={product} />
            ))}
          </div>
        ) : (
          searchQuery && (
            <div className="text-center text-gray-500 mt-4">
              No products found for "{searchQuery}"
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Navbar;

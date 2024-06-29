// import { useEffect, useRef, useState } from "react";
// import { HiDotsHorizontal } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const OrderHAction = ({ currentStatus, onStatusChange }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const handleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const dropdownRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setShowDropdown(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const statusOptions = ["processing", "pending", "delivered", "shipped"];

//   const getNextStatus = () => {
//     const currentIndex = statusOptions.indexOf(currentStatus);
//     return statusOptions[(currentIndex + 1) % statusOptions.length];
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="action-dropdown-btn"
//         onClick={handleDropdown}
//       >
//         <HiDotsHorizontal size={18} />
//         {showDropdown && (
//           <div className="action-dropdown-menu" ref={dropdownRef}>
//             <ul className="dropdown-menu-list">
//               <li
//                 className="dropdown-menu-item"
//                 onClick={() => {
//                   onStatusChange(getNextStatus());
//                   setShowDropdown(false);
//                 }}
//               >
//                 <span className="dropdown-menu-link">Next Status</span>
//               </li>
//             </ul>
//           </div>
//         )}
//       </button>
//     </>
//   );
// };
// export default OrderHAction;
import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const OrderHAction = ({ currentStatus, onAction }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleDropdown}
        disabled={currentStatus !== "delivered"}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div className="action-dropdown-menu" ref={dropdownRef}>
            <ul className="dropdown-menu-list">
              <li
                className="dropdown-menu-item"
                onClick={() => {
                  onAction("Refund");
                  setShowDropdown(false);
                }}
              >
                <span className="dropdown-menu-link">Refund</span>
              </li>
              <li
                className="dropdown-menu-item"
                onClick={() => {
                  onAction("Exchange");
                  setShowDropdown(false);
                }}
              >
                <span className="dropdown-menu-link">Exchange</span>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default OrderHAction;

// import { useEffect, useRef, useState } from "react";
// import { HiDotsHorizontal } from "react-icons/hi";
// import axios from "axios";

// const SubscriptionRequestsAction = ({ id }) => {
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

//   const handleAccept = async () => {
//     try {
//       const response = await axios.post(
//         `http://aqay.runasp.net/api/Admin/accept%20merchant?pendingMerchantId=${id}`
//       );
//       alert(response.data);
//     } catch (error) {
//       console.error("Error accepting merchant:", error);
//       alert("Failed to accept merchant.");
//     }
//   };

//   const handleReject = async () => {
//     try {
//       const response = await axios.post(
//         `http://aqay.runasp.net/api/Admin/reject%20merchant?pendingMerchantId=${id}`
//       );
//       alert(response.data);
//     } catch (error) {
//       console.error("Error rejecting merchant:", error);
//       alert("Failed to reject merchant.");
//     }
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
//               <li className="dropdown-menu-item" onClick={handleAccept}>
//                 Accept
//               </li>
//               <li className="dropdown-menu-item" onClick={handleReject}>
//                 Reject
//               </li>
//             </ul>
//           </div>
//         )}
//       </button>
//     </>
//   );
// };

// export default SubscriptionRequestsAction;
import React, { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import axios from "axios";

const SubscriptionRequestsAction = ({ id, onRemove }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAccept = async () => {
    try {
      const response = await axios.post(
        `http://aqay.runasp.net/api/Admin/accept%20merchant?pendingMerchantId=${id}`
      );
      if (response.status === 200) {
        onRemove(id);
        alert("Merchant accepted successfully.");
      } else {
        throw new Error("Failed to accept merchant");
      }
    } catch (error) {
      console.error("Error accepting merchant:", error);
      alert("Failed to accept merchant.");
    }
  };

  const handleReject = async () => {
    try {
      const response = await axios.post(
        `http://aqay.runasp.net/api/Admin/reject%20merchant?pendingMerchantId=${id}`
      );
      if (response.status === 200) {
        onRemove(id);
        alert("Merchant rejected successfully.");
      } else {
        throw new Error("Failed to reject merchant");
      }
    } catch (error) {
      console.error("Error rejecting merchant:", error);
      alert("Failed to reject merchant.");
    }
  };

  return (
    <>
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div className="action-dropdown-menu" ref={dropdownRef}>
            <ul className="dropdown-menu-list">
              <li className="dropdown-menu-item" onClick={handleAccept}>
                Accept
              </li>
              <li className="dropdown-menu-item" onClick={handleReject}>
                Reject
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default SubscriptionRequestsAction;

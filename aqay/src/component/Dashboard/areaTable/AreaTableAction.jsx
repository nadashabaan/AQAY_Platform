import React, { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import axios from "axios";

const AreaTableAction = ({ orderId, currentStatus }) => {
  const [showDropdown, setShowDropdown] = useState(false);
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

  const statusOptions = ["processing", "pending", "delivered", "shipped"];

  const getNextStatus = (current) => {
    const currentIndex = statusOptions.indexOf(current);
    return statusOptions[(currentIndex + 1) % statusOptions.length];
  };

  const handleStatusChange = async (newStatus) => {
    try {
      await axios.put(`http://aqay.runasp.net/api/Order/order/status`, null, {
        params: {
          orderId: orderId,
          newStatus: statusOptions.indexOf(newStatus),
        },
      });
      alert("Status updated successfully");
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("Failed to update status.");
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
              {statusOptions.map(
                (status, index) =>
                  currentStatus !== status && (
                    <li
                      key={index}
                      className="dropdown-menu-item"
                      onClick={() => {
                        handleStatusChange(status);
                        setShowDropdown(false);
                      }}
                    >
                      <span className="dropdown-menu-link">
                        Change to {status}
                      </span>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default AreaTableAction;

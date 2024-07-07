import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogOut;

import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const SidebarContextD = createContext({});

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <SidebarContextD.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </SidebarContextD.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node,
};

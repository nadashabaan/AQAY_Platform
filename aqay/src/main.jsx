import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { SidebarProvider } from "./context/SidebarContextD.jsx";
import { UserProvider } from "./context/UserContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);

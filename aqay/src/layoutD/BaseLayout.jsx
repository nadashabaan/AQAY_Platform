import { Outlet } from "react-router-dom";
import SidebarD from "../component/sidebarD/SidebarD";

const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <SidebarD />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;

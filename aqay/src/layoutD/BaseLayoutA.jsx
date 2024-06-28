import { Outlet } from "react-router-dom";
import SidebarDA from "../component/sidebarD/SidebarDA";

const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <SidebarDA />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;

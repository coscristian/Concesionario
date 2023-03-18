import Sidebar from "components/Sidebar";
import SidebarResponsive from "components/SidebarResponsive";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      <Sidebar />
      <SidebarResponsive />
      <main className="flex w-full overflow-y-scroll justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;

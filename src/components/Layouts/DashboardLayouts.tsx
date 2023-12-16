import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayouts = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayouts;

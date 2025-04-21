import { Outlet } from "react-router-dom";
import Sidebar from "../admin/dashboard/Sidebar";

import DasHeader from "../admin/dashboard/DasHeader";

const DashboardLayout = () => {
  return (
    <div className=" h-screen w-screen overflow-hidden flex max-w-[100%] max-h-[100%]">
      <Sidebar />
      <div className="flex-1">
        <DasHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

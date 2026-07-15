import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function NGOLayout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default NGOLayout;
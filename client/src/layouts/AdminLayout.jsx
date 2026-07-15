import Navbar from "../components/Navbar/Navbar";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
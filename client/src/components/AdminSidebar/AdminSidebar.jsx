import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaCalendarAlt,
  FaClipboardList,
  FaChartBar,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

function AdminSidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen p-6">

      <h2 className="text-2xl font-bold text-blue-700 mb-8">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-3">

        <NavLink to="/admin" end className={linkClass}>
          <FaTachometerAlt />
          Dashboard
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
          <FaUsers />
          Users
        </NavLink>

        <NavLink to="/admin/ngos" className={linkClass}>
          <FaBuilding />
          NGOs
        </NavLink>

        <NavLink to="/admin/events" className={linkClass}>
          <FaCalendarAlt />
          Events
        </NavLink>

        <NavLink to="/admin/applications" className={linkClass}>
          <FaClipboardList />
          Applications
        </NavLink>

        <NavLink to="/admin/analytics" className={linkClass}>
          <FaChartBar />
          Analytics
        </NavLink>

        <NavLink to="/admin/settings" className={linkClass}>
          <FaCog />
          Settings
        </NavLink>

        <NavLink to="/admin/profile" className={linkClass}>
          <FaUserCircle />
          Profile
        </NavLink>

      </nav>

    </aside>
  );
}

export default AdminSidebar;
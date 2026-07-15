import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const { user } = useAuth();

  const linkStyle = ({ isActive }) =>
    `block px-3 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen p-6 sticky top-16">
      <h2 className="text-xl font-bold mb-8">
        {user?.role === "ngo"
          ? "NGO Panel"
          : user?.role === "admin"
          ? "Admin Panel"
          : "Volunteer Panel"}
      </h2>

      <nav className="flex flex-col gap-3">

        {/* Volunteer Sidebar */}
        {user?.role === "volunteer" && (
          <>
            <NavLink to="/volunteer" end className={linkStyle}>
              Dashboard
            </NavLink>
            <NavLink to="/volunteer/events" end className={linkStyle}>
              Events
            </NavLink>
            <NavLink to="/volunteer/ai" end className={linkStyle}>
              AI Recommendations
            </NavLink>
            <NavLink to="/volunteer/my-certificates" end className={linkStyle}>
              My Certificates
            </NavLink>
            <NavLink to="/volunteer/leaderboard" end className={linkStyle}>
              Leaderboard
            </NavLink>
            <NavLink to="/volunteer/profile" end className={linkStyle}>
              Profile
            </NavLink>
          </>
        )}

        {/* NGO Sidebar */}
        {user?.role === "ngo" && (
          <>
            <NavLink to="/ngo" end className={linkStyle}>
              Dashboard
            </NavLink>
            <NavLink to="/ngo/events" end className={linkStyle}>
              My Events
            </NavLink>
            <NavLink to="/ngo/applications" end className={linkStyle}>
              Applications
            </NavLink>
            <NavLink to="/ngo/attendance" end className={linkStyle}>
              Attendance
            </NavLink>
            <NavLink to="/ngo/certificates" end className={linkStyle}>
              Certificates
            </NavLink>
            <NavLink to="/ngo/profile" end className={linkStyle}>
              Profile
            </NavLink>
          </>
        )}

        {/* Admin Sidebar */}
        {user?.role === "admin" && (
          <>
            <NavLink to="/admin" end className={linkStyle}>
              Dashboard
            </NavLink>

            <NavLink to="/users" end className={linkStyle}>
              Users
            </NavLink>

            <NavLink to="/events" end className={linkStyle}>
              Events
            </NavLink>

            <NavLink to="/analytics" end className={linkStyle}>
              Analytics
            </NavLink>

            <NavLink to="/profile" end className={linkStyle}>
              Profile
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  );
}

export default Sidebar;
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">

        <h1 className="text-2xl font-bold">
          ImpactLink
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4">

          <div className="text-center sm:text-right">
            <p className="font-semibold">
              {user?.fullName}
            </p>

            <p className="text-sm text-gray-200 capitalize">
              {user?.role}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
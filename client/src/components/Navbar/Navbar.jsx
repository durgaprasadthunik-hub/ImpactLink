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
    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">
        ImpactLink
      </h1>

      <div className="flex items-center gap-6">

        <div className="text-right">
          <p className="font-semibold">
            {user?.fullName}
          </p>

          <p className="text-sm text-gray-200">
            {user?.role}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  console.log("User:", user);
  console.log("Role:", user?.role);
  console.log("Allowed:", allowedRoles);
  console.log("Includes:", allowedRoles.includes(user?.role));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    console.log("Access denied");
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
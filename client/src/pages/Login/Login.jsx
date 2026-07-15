import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await api.post("/auth/login", formData);

      // Save user and token using Auth Context
      login(response.data.user, response.data.token);

      setMessage("✅ Login Successful!");

      setTimeout(() => {
        if (response.data.user.role === "volunteer") {
          navigate("/volunteer");
        } else if (response.data.user.role === "ngo") {
          navigate("/ngo");
        } else if (response.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 1000);

    } catch (error) {
      console.error("Login Error:", error);

      if (error.response) {
        console.log("Response Data:", error.response.data);
        console.log("Status:", error.response.status);

        setMessage(
          error.response.data.message || "Login Failed"
        );
      } else {
        setMessage("Unable to connect to server");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome Back
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 mt-8">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          {message && (
            <p
              className={`text-center font-semibold ${
                message.includes("Successful")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-700 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;
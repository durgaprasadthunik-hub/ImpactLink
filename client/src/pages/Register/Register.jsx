import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "volunteer",
    phone: "",
    location: "",
    skills: "",
    interests: "",
    availability: "",
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
      await api.post("/auth/register", {
        ...formData,
        skills: formData.skills
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        interests: formData.interests
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      });

      setMessage("✅ Registration Successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "❌ Registration Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-blue-700">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join ImpactLink as a Volunteer or NGO
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-3 rounded-lg"
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="volunteer">Volunteer</option>
            <option value="ngo">NGO</option>
          </select>

          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Skills (Example: Java, AI, React)"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="Interests (Example: Education, Healthcare)"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="Availability (Example: Weekends)"
            className="w-full border p-3 rounded-lg"
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
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold disabled:bg-gray-400"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
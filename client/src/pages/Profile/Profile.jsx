import { useEffect, useState } from "react";
import api from "../../services/api";

function Profile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    interests: "",
    availability: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get("/users/profile");

      const user = response.data.user;

      setFormData({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        skills: (user.skills || []).join(", "),
        interests: (user.interests || []).join(", "),
        availability: user.availability || "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.put("/users/profile", {
        ...formData,
        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),

        interests: formData.interests
          .split(",")
          .map((interest) => interest.trim())
          .filter(Boolean),
      });

      toast.success("Profile Updated Successfully!");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Profile Update Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          My Profile
        </h1>

        <form
          onSubmit={updateProfile}
          className="space-y-5"
        >

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            value={formData.email}
            disabled
            className="w-full border p-3 rounded-lg bg-gray-100"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="interests"
            placeholder="Interests"
            value={formData.interests}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="availability"
            placeholder="Availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Profile;
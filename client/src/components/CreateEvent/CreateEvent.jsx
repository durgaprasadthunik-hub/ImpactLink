import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

function CreateEvent({ onEventCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    requiredSkills: "",
    maxVolunteers: "",
    interests: [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInterestChange = (interest) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter((i) => i !== interest),
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/events", {
        ...formData,
        requiredSkills: formData.requiredSkills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
        interests: formData.interests,
      });

      toast.success("Event Created Successfully!");

      setFormData({
        title: "",
        description: "",
        location: "",
        date: "",
        requiredSkills: "",
        maxVolunteers: "",
        interests: [],
      });

      if (onEventCreated) {
        onEventCreated();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to Create Event"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Create New Event
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 rounded-lg md:col-span-2"
          rows="4"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="maxVolunteers"
          placeholder="Maximum Volunteers"
          value={formData.maxVolunteers}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="requiredSkills"
          placeholder="Skills (Teaching, Communication, First Aid)"
          value={formData.requiredSkills}
          onChange={handleChange}
          className="border p-3 rounded-lg md:col-span-2"
          required
        />

        {/* Interests */}

        <div className="md:col-span-2">

          <label className="block font-semibold mb-3">
            Select Interests
          </label>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

            {[
              "Education",
              "Healthcare",
              "Environment",
              "Women Empowerment",
              "Child Welfare",
              "Elderly Care",
              "Animal Welfare",
              "Community Service",
              "Technology",
              "Food Distribution",
            ].map((interest) => (

              <label
                key={interest}
                className="flex items-center gap-2"
              >

                <input
                  type="checkbox"
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                />

                {interest}

              </label>

            ))}

          </div>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg md:col-span-2"
        >
          {loading ? "Creating..." : "Create Event"}
        </button>

      </form>

    </div>
  );
}

export default CreateEvent;
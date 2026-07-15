import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

function EventCard({ event }) {
  const [loading, setLoading] = useState(false);

  const handleApply = async () => {
    try {
      setLoading(true);

      const response = await api.post(
        `/applications/apply/${event._id}`
      );

      toast.success(
        response.data.message || "Application Submitted Successfully!"
      );

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Application Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-blue-700">
          {event.title}
        </h2>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          Open
        </span>

      </div>

      <p className="text-gray-600 mt-4 leading-7 min-h-[70px]">
        {event.description}
      </p>

      <div className="mt-6 space-y-3">

        <p>
          📍 <strong>Location:</strong> {event.location}
        </p>

        <p>
          📅 <strong>Date:</strong>{" "}
          {new Date(event.date).toLocaleDateString()}
        </p>

        <p>
          👥 <strong>Max Volunteers:</strong>{" "}
          {event.maxVolunteers}
        </p>

        <p>
          🛠 <strong>Skills:</strong>{" "}
          {event.requiredSkills?.join(", ")}
        </p>

        <p>
          ❤️ <strong>Interests:</strong>{" "}
          {event.interests?.length > 0
            ? event.interests.join(", ")
            : "Not Specified"}
        </p>

      </div>

      <button
        onClick={handleApply}
        disabled={loading}
        className={`mt-8 w-full py-3 rounded-xl font-semibold text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-700 hover:bg-blue-800"
        }`}
      >
        {loading ? "Applying..." : "Apply Now"}
      </button>

    </div>
  );
}

export default EventCard;
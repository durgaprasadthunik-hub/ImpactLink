import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

function AttendanceCard({ application, refresh }) {
  const [hours, setHours] = useState(1);
  const [loading, setLoading] = useState(false);

  const markAttendance = async () => {
    try {
      setLoading(true);

      await api.post("/attendance/mark", {
        eventId: application.event._id,
        volunteerId: application.volunteer._id,
        attendance: true,
        hours: Number(hours),
      });

      toast.success("Attendance marked successfully!");

      if (refresh) {
        refresh();
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to mark attendance"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold text-blue-700">
        {application.volunteer?.fullName}
      </h2>

      <p className="mt-2">
        <strong>Email:</strong> {application.volunteer?.email}
      </p>

      <p className="mt-1">
        <strong>Location:</strong> {application.volunteer?.location}
      </p>

      <p className="mt-1">
        <strong>Event:</strong> {application.event?.title}
      </p>

      <div className="mt-5">
        <label className="block font-semibold mb-2">
          Volunteer Hours
        </label>

        <input
          type="number"
          min="1"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="border rounded-lg p-2 w-full"
        />
      </div>

      <button
        onClick={markAttendance}
        disabled={loading}
        className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold"
      >
        {loading ? "Marking..." : "Mark Present"}
      </button>

    </div>
  );
}

export default AttendanceCard;
import { useEffect, useState } from "react";
import api from "../../services/api";
import AttendanceCard from "../../components/AttendanceCard/AttendanceCard";

function Attendance() {
  const [events, setEvents] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.get("/events");

      const user = JSON.parse(localStorage.getItem("user"));

      const myEvents = response.data.events.filter(
        (event) =>
          event.organizer?._id === user._id ||
          event.organizer === user._id
      );

      setEvents(myEvents);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVolunteers = async (eventId) => {
    try {
      const response = await api.get(
        `/applications/event/${eventId}`
      );

      const approvedApplications =
        response.data.applications.filter(
          (application) =>
            application.status === "Approved"
        );

      setApplications(approvedApplications);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Attendance
      </h1>

      {events.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
          No events found.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-bold">
                {event.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {event.location}
              </p>

              <button
                onClick={() => fetchVolunteers(event._id)}
                className="mt-5 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
              >
                View Volunteers
              </button>
            </div>
          ))}
        </div>
      )}

      {applications.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {applications.map((application) => (
            <AttendanceCard
              key={application._id}
              application={application}
              refresh={() =>
                fetchVolunteers(application.event._id)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Attendance;
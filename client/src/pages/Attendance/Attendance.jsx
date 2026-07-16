import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

function Attendance() {
  const [events, setEvents] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");

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
      setSelectedEvent(eventId);

      const response = await api.get(
        `/applications/event/${eventId}`
      );

      const approvedApplications =
        response.data.applications.filter(
          (application) => application.status === "Approved"
        );

      setApplications(approvedApplications);
    } catch (error) {
      console.error(error);
    }
  };

  const markAttendance = async (applicationId) => {
    try {
      await api.put(
        `/applications/${applicationId}/attendance`
      );

      toast.success("Attendance marked successfully");

      fetchVolunteers(selectedEvent);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to mark attendance"
      );
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
        <div className="mt-10 bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4 text-left">Volunteer</th>
                <th>Email</th>
                <th>Status</th>
                <th>Attendance</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application) => (
                <tr
                  key={application._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    {application.volunteer.fullName}
                  </td>

                  <td>
                    {application.volunteer.email}
                  </td>

                  <td>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                      {application.status}
                    </span>
                  </td>

                  <td>
                    {application.attendance ? (
                      <span className="text-green-600 font-semibold">
                        Present
                      </span>
                    ) : (
                      <button
                        onClick={() =>
                          markAttendance(application._id)
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        Mark Present
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Attendance;
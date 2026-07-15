import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

function Attendance() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await api.get("/events");

      const user = JSON.parse(localStorage.getItem("user"));

      const myEvents = response.data.events.filter(
        (event) => event.organizer === user._id
      );

      setEvents(myEvents);

    } catch (error) {
      console.log(error);
    }
  };

  const fetchApprovedApplicants = async (eventId) => {
    try {

      const response = await api.get(
        `/applications/event/${eventId}`
      );

      const approved = response.data.applications.filter(
        (app) => app.status === "Approved"
      );

      setApplications(approved);
      setSelectedEvent(eventId);

    } catch (error) {
      console.log(error);
    }
  };
  const markAttendance = async (eventId, volunteerId) => {
  try {

    await api.post("/attendance/mark", {
      eventId,
      volunteerId,
      attendance: true,
      hours: 4,
    });

    toast.success("Attendance Marked Successfully!");

    fetchApprovedApplicants(selectedEvent);

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Failed to mark attendance"
    );

  }
};
const generateCertificate = async (eventId, volunteerId) => {
  try {

    await api.post(
      `/certificates/generate/${eventId}/${volunteerId}`
    );

    toast.success("Certificate Generated Successfully!");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Certificate Generation Failed"
    );

  }
};

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Attendance
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {events.map((event) => (

          <div
            key={event._id}
            className="bg-white shadow rounded-xl p-6"
          >

            <h2 className="text-2xl font-bold">
              {event.title}
            </h2>

            <button
              onClick={() =>
                fetchApprovedApplicants(event._id)
              }
              className="mt-5 bg-blue-700 text-white px-5 py-2 rounded"
            >
              View Volunteers
            </button>

          </div>

        ))}

      </div>

      {selectedEvent && (

        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Approved Volunteers
          </h2>

          {applications.length === 0 ? (

            <p>No Approved Volunteers</p>

          ) : (

            <div className="space-y-4">

              {applications.map((application) => (

                <div
                  key={application._id}
                  className="bg-white rounded-xl shadow p-6 flex justify-between items-center"
                >

                  <div>

                    <h3 className="font-bold text-xl">
                      {application.volunteer.fullName}
                    </h3>

                    <p>
                      {application.volunteer.email}
                    </p>

                  </div>

                  <button
                        onClick={() =>
                            markAttendance(
                            application.event._id,
                            application.volunteer._id
                            )
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                        >
                        Mark Attendance
                        </button>
                        <button
                                onClick={() =>
                                    generateCertificate(
                                    application.event._id,
                                    application.volunteer._id
                                    )
                                }
                                className="mt-3 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
                                >
                                Generate Certificate
                                </button>

                </div>

              ))}

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default Attendance;
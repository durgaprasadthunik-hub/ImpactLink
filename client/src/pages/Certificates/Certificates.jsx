import { useEffect, useState } from "react";
import api from "../../services/api";
import CertificateCard from "../../components/CertificateCard/CertificateCard";

function Certificates() {

  const [events, setEvents] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
  try {
    const response = await api.get("/events");

    const user = JSON.parse(localStorage.getItem("user"));

    setEvents(
      response.data.events.filter(
        (event) => event.organizer === user._id
      )
    );
  } catch (error) {
    console.error(error);
  }
};

  const fetchVolunteers = async (eventId) => {

    const response = await api.get(
      `/applications/event/${eventId}`
    );

    setApplications(
      response.data.applications.filter(
        (application) =>
          application.status === "Approved"
      )
    );
  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Certificates
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {events.map((event) => (

          <div
            key={event._id}
            className="bg-white rounded-xl shadow p-6"
          >

            <h2 className="text-2xl font-bold">
              {event.title}
            </h2>

            <button
              onClick={() =>
                fetchVolunteers(event._id)
              }
              className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              View Volunteers
            </button>

          </div>

        ))}

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {applications.map((application) => (

          <CertificateCard
            key={application._id}
            application={application}
            refresh={() =>
              fetchVolunteers(application.event._id)
            }
          />

        ))}

      </div>

    </div>
  );
}

export default Certificates;
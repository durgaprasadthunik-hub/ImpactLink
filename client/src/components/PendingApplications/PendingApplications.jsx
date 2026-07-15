import { useEffect, useState } from "react";
import api from "../../services/api";

function PendingApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchPendingApplications();
  }, []);

  const fetchPendingApplications = async () => {
    try {
      // Get all NGO events
      const eventsResponse = await api.get("/events");

      const user = JSON.parse(localStorage.getItem("user"));

      const myEvents = eventsResponse.data.events.filter(
        (event) => event.organizer === user._id
      );

      let pending = [];

      for (const event of myEvents) {
        const response = await api.get(
          `/applications/event/${event._id}`
        );

        pending.push(
          ...response.data.applications.filter(
            (app) => app.status === "Pending"
          )
        );
      }

      setApplications(pending.slice(0, 5));

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        ⏳ Pending Applications
      </h2>

      {applications.length === 0 ? (

        <p className="text-gray-500">
          No Pending Applications
        </p>

      ) : (

        applications.map((app) => (

          <div
            key={app._id}
            className="border-b py-4"
          >

            <h3 className="font-bold">
              {app.volunteer.fullName}
            </h3>

            <p className="text-gray-500">
              {app.event.title}
            </p>

            <span className="inline-block mt-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              Pending
            </span>

          </div>

        ))

      )}

    </div>
  );
}

export default PendingApplications;
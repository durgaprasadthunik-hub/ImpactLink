import { useEffect, useState } from "react";
import api from "../../services/api";

function RecentEvents() {
  const [events, setEvents] = useState([]);

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

      setEvents(myEvents.slice(0, 3));

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        📅 Recent Events
      </h2>

      {events.length === 0 ? (

        <p className="text-gray-500">
          No Events Yet
        </p>

      ) : (

        events.map((event) => (

          <div
            key={event._id}
            className="border-b py-4"
          >

            <h3 className="font-bold text-blue-700">
              {event.title}
            </h3>

            <p className="text-gray-500">
              {event.location}
            </p>

          </div>

        ))

      )}

    </div>
  );
}

export default RecentEvents;
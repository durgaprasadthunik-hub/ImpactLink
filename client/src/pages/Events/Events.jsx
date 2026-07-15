import { useEffect, useState } from "react";
import api from "../../services/api";
import EventCard from "../../components/EventCard/EventCard";

function Events() {

  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {

      const response = await api.get("/events");

      setEvents(response.data.events);
      setFilteredEvents(response.data.events);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (value) => {

    setSearch(value);

    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredEvents(filtered);

  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        Volunteer Events
      </h1>

      <input
        type="text"
        placeholder="🔍 Search Events..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full border p-3 rounded-lg mb-8"
      />

      {filteredEvents.length === 0 ? (

        <div className="bg-white rounded-xl shadow p-8">
          No Events Found
        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {filteredEvents.map((event) => (

            <EventCard
              key={event._id}
              event={event}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default Events;
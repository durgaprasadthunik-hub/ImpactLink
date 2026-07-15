import { useEffect, useState } from "react";
import api from "../../services/api";
import { FaTrash, FaSearch } from "react-icons/fa";

function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
  try {
    const res = await api.get("/admin/events");

    console.log(res.data);

    setEvents(res.data.events);
  } catch (err) {
    console.log(err);
  }
};

  const deleteEvent = async (id) => {
    if (!window.confirm("Delete this event?")) return;

    await api.delete(`/admin/events/${id}`);
    fetchEvents();
  };

  const filtered = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Events Management
      </h1>

      <div className="bg-white rounded-xl shadow p-5 mb-8 flex items-center gap-3">
        <FaSearch />

        <input
          className="w-full outline-none"
          placeholder="Search Event..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-purple-600 text-white">

            <tr>

              <th className="p-4 text-left">Event</th>
              <th>NGO</th>
              <th>Location</th>
              <th>Date</th>
              <th>Delete</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((event) => (

              <tr
                key={event._id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-4">{event.title}</td>

                <td>{event.organizer?.fullName}</td>

                <td>{event.location}</td>

                <td>
                  {new Date(event.date).toLocaleDateString()}
                </td>

                <td>

                  <button
                    onClick={() => deleteEvent(event._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default AdminEvents;
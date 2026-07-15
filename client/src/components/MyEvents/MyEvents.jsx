import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function MyEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMyEvents();
  }, []);

  const fetchMyEvents = async () => {
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


  // Delete Event
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/events/${id}`);

      setEvents(
        events.filter((event) => event._id !== id)
      );

      alert("Event deleted successfully");

    } catch (error) {
      console.log(error);
      alert("Failed to delete event");
    }
  };


  // Edit Event
  const handleEdit = (id) => {
    navigate(`/edit-event/${id}`);
  };


  return (
    <div className="bg-white rounded-xl shadow-md p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        My Events
      </h2>


      {events.length === 0 ? (

        <p>No Events Created Yet.</p>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {events.map((event) => (

            <div
              key={event._id}
              className="border rounded-xl p-5 shadow hover:shadow-lg"
            >

              <h3 className="text-2xl font-bold text-blue-700">
                {event.title}
              </h3>


              <p className="mt-2 text-gray-600">
                {event.description}
              </p>


              <p className="mt-4">
                📍 {event.location}
              </p>


              <p>
                📅 {new Date(event.date).toLocaleDateString()}
              </p>


              <p>
                👥 {event.maxVolunteers} Volunteers
              </p>



              <button
                onClick={() => handleEdit(event._id)}
                className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-3"
              >
                Edit
              </button>


              <button
                onClick={() => handleDelete(event._id)}
                className="mt-5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>


            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default MyEvents;
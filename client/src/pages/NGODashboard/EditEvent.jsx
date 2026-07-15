import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

function EditEvent() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    maxVolunteers: "",
  });


  useEffect(() => {
    fetchEvent();
  }, []);


  const fetchEvent = async () => {
    try {

      const response = await api.get(`/events/${id}`);

      const data = response.data.event;

      setEvent({
        title: data.title || "",
        description: data.description || "",
        location: data.location || "",
        date: data.date ? data.date.split("T")[0] : "",
        maxVolunteers: data.maxVolunteers || "",
      });


    } catch (error) {
      console.log(error);
      toast.error("Failed to load event");
    }
  };


  const handleChange = (e) => {

    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.put(
        `/events/${id}`,
        event
      );

      console.log(response.data);

      toast.success("Event updated successfully 🎉");


      setTimeout(() => {
        navigate("/ngo");
        }, 1500);


    } catch (error) {

      console.log(error);

      toast.error("Failed to update event ❌");

    }

  };


  return (

    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">


      <h1 className="text-3xl font-bold mb-6">
        Edit Event
      </h1>


      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >


        <input
          type="text"
          name="title"
          value={event.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          placeholder="Event Title"
        />


        <textarea
          name="description"
          value={event.description}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          placeholder="Description"
        />


        <input
          type="text"
          name="location"
          value={event.location}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          placeholder="Location"
        />


        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />


        <input
          type="number"
          name="maxVolunteers"
          value={event.maxVolunteers}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          placeholder="Maximum Volunteers"
        />


        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Update Event
        </button>


      </form>


    </div>

  );
}


export default EditEvent;
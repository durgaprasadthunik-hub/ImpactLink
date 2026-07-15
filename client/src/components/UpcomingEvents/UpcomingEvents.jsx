import { useNavigate } from "react-router-dom";

function UpcomingEvents() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/login");
  };

  const events = [
    {
      title: "Tree Plantation Drive",
      location: "Hyderabad",
      date: "20 July 2026",
      volunteers: 50,
    },
    {
      title: "Blood Donation Camp",
      location: "Warangal",
      date: "25 July 2026",
      volunteers: 100,
    },
    {
      title: "Education Awareness Program",
      location: "Vijayawada",
      date: "30 July 2026",
      volunteers: 75,
    },
  ];

  return (
    <section
      id="events"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-blue-700">
            Upcoming Events
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Join meaningful events and make a positive impact in your community.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {events.map((event, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-2xl font-bold text-blue-700">
                {event.title}
              </h3>

              <p className="mt-5">
                📍 {event.location}
              </p>

              <p>
                📅 {event.date}
              </p>

              <p>
                👥 {event.volunteers} Volunteers
              </p>

              <button
                onClick={handleExplore}
                className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Explore
              </button>

            </div>

          ))}

        </div>

        {/* View All Events Button */}

        <div className="text-center mt-12">

          <button
            onClick={handleExplore}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
          >
            View All Events →
          </button>

        </div>

      </div>
    </section>
  );
}

export default UpcomingEvents;
import { useNavigate } from "react-router-dom";

function ProgrammeEvents({ programme }) {
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate("/login");
  };

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-blue-700">
          Upcoming {programme.title} Events
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Join upcoming volunteer opportunities and create a positive impact.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold">
              Volunteer Drive
            </h3>

            <p className="mt-4">
              📍 Hyderabad
            </p>

            <p>
              📅 20 July 2026
            </p>

            <p>
              👥 50 Volunteers
            </p>

            <button
              onClick={handleJoin}
              className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl"
            >
              Join Now
            </button>

          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold">
              Awareness Camp
            </h3>

            <p className="mt-4">
              📍 Warangal
            </p>

            <p>
              📅 28 July 2026
            </p>

            <p>
              👥 80 Volunteers
            </p>

            <button
              onClick={handleJoin}
              className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl"
            >
              Join Now
            </button>

          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold">
              Community Outreach
            </h3>

            <p className="mt-4">
              📍 Vijayawada
            </p>

            <p>
              📅 10 August 2026
            </p>

            <p>
              👥 60 Volunteers
            </p>

            <button
              onClick={handleJoin}
              className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl"
            >
              Join Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProgrammeEvents;
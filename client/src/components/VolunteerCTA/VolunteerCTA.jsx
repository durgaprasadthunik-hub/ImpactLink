import { useNavigate } from "react-router-dom";

function VolunteerCTA({ programme }) {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-blue-700 to-green-600 py-24">

      <div className="max-w-6xl mx-auto text-center px-8">

        <h2 className="text-5xl font-extrabold text-white">
          Become a {programme.title} Volunteer
        </h2>

        <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-8">
          Join passionate volunteers who are creating meaningful social impact
          through {programme.title.toLowerCase()} initiatives.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-10 bg-white text-blue-700 hover:bg-gray-100 px-10 py-4 rounded-xl text-lg font-bold"
        >
          Join Now
        </button>

      </div>

    </section>
  );
}

export default VolunteerCTA;
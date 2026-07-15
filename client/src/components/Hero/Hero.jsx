import heroImage from "../../assets/images/hero.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
    id="home"
    className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 flex flex-col justify-center min-h-screen">

        <span className="bg-yellow-400 text-black font-bold px-5 py-2 rounded w-fit">
          VOLUNTEER WITH PURPOSE
        </span>

        <h1 className="text-yellow-400 text-7xl font-extrabold mt-8 leading-tight max-w-4xl">
          Connect.
          <br />
          Collaborate.
          <br />
          Make an Impact.
        </h1>

        <p className="text-gray-200 text-xl mt-8 max-w-3xl leading-8">
          ImpactLink brings volunteers, NGOs, and social initiatives together on one smart platform.
          Discover meaningful opportunities, manage impactful events, track volunteer contributions,
          and build stronger communities through seamless digital collaboration.
        </p>

        <div className="flex gap-6 mt-10">
        <Link
          to="/events"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
        >
          Explore Opportunities
        </Link>

        <Link
          to="/register"
          className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition"
        >
          Register
        </Link>
      </div>

      </div>
    </section>
  );
}

export default Hero;
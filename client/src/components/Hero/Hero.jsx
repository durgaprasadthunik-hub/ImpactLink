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
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-center min-h-screen">

        <span className="bg-yellow-400 text-black font-bold px-4 py-2 rounded w-fit text-xs sm:text-sm">
          VOLUNTEER WITH PURPOSE
        </span>

        <h1 className="text-yellow-400 font-extrabold leading-tight mt-6
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          max-w-4xl">
          Connect.
          <br />
          Collaborate.
          <br />
          Make an Impact.
        </h1>

        <p className="text-gray-200 mt-6 max-w-3xl leading-7
          text-base
          sm:text-lg
          md:text-xl">
          ImpactLink brings volunteers, NGOs, and social initiatives together on one smart platform.
          Discover meaningful opportunities, manage impactful events, track volunteer contributions,
          and build stronger communities through seamless digital collaboration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link
            to="/events"
            className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-lg text-center font-semibold transition"
          >
            Explore Opportunities
          </Link>

          <Link
            to="/register"
            className="border border-white text-white hover:bg-white hover:text-black px-7 py-3 rounded-lg text-center font-semibold transition"
          >
            Register
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;
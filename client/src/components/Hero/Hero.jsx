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
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex items-center px-6 sm:px-10 lg:px-16 pt-24 pb-12">

        <div className="max-w-3xl">

          {/* Badge */}
          <span className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-xs sm:text-sm tracking-wide">
            VOLUNTEER WITH PURPOSE
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-yellow-400 font-extrabold leading-tight
                         text-4xl
                         sm:text-5xl
                         md:text-6xl
                         lg:text-7xl">
            Connect.
            <br />
            Collaborate.
            <br />
            Make an Impact.
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-200 leading-7
                        text-base
                        sm:text-lg
                        md:text-xl
                        max-w-2xl">
            ImpactLink brings volunteers, NGOs, and social initiatives together
            on one smart platform. Discover meaningful opportunities, manage
            impactful events, track volunteer contributions, and build stronger
            communities through seamless digital collaboration.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <Link
              to="/events"
              className="w-full sm:w-auto text-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Explore Opportunities
            </Link>

            <Link
              to="/register"
              className="w-full sm:w-auto text-center border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition"
            >
              Register
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
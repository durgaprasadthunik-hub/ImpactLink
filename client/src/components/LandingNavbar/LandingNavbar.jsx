import { Link } from "react-router-dom";

function LandingNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="text-4xl font-extrabold text-blue-700"
        >
          ImpactLink
        </Link>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-10">

          <a
            href="#home"
            className="font-semibold text-gray-700 hover:text-blue-700 duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="font-semibold text-gray-700 hover:text-blue-700 duration-300"
          >
            About Us
          </a>

          <a
            href="#events"
            className="font-semibold text-gray-700 hover:text-blue-700 duration-300"
          >
            Events
          </a>

          <a
            href="#contact"
            className="font-semibold text-gray-700 hover:text-blue-700 duration-300"
          >
            Contact
          </a>

        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <Link
            to="/login"
            className="border border-blue-700 text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 duration-300"
          >
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default LandingNavbar;
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-4xl font-extrabold text-blue-700"
        >
          ImpactLink
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">

          <a href="#home" className="font-semibold hover:text-blue-700">
            Home
          </a>

          <a href="#about" className="font-semibold hover:text-blue-700">
            About Us
          </a>

          <a href="#events" className="font-semibold hover:text-blue-700">
            Events
          </a>

          <a href="#contact" className="font-semibold hover:text-blue-700">
            Contact
          </a>

        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">

          <Link
            to="/login"
            className="border border-blue-700 text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Register
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">

          <div className="flex flex-col items-center gap-5 py-6">

            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>

            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>

            <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="w-40 text-center border border-blue-700 text-blue-700 py-2 rounded-lg"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="w-40 text-center bg-blue-700 text-white py-2 rounded-lg"
            >
              Register
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default LandingNavbar;
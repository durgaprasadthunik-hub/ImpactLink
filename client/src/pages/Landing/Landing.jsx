import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Stats from "../../components/Stats/Stats";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import Features from "../../components/Features/Features";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Programmes from "../../components/Programmes/Programmes";

function Landing() {
  return (
    <>
      <LandingNavbar />

      <Hero />

      <Programmes />

      <About />

      <Stats />

      <UpcomingEvents />

      <Features />

      <Contact />

      <Footer />
    </>
  );
}

export default Landing;
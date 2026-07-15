import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-blue-700">
            About Us
          </h2>

          <div className="w-24 h-1 bg-green-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 mt-8 max-w-4xl mx-auto text-lg leading-8">
            ImpactLink is an AI-powered volunteer and NGO management platform designed to bridge the gap between passionate individuals and organizations working toward meaningful social impact.
            Our platform enables seamless collaboration between volunteers and NGOs by simplifying volunteer discovery, 
            recruitment, event coordination, application management, attendance tracking, 
            digital certifications, and community engagement.
            <br />
            <br />
            With intelligent recommendations and streamlined workflows, 
            ImpactLink helps volunteers find opportunities that match their skills, 
            interests, and availability while empowering NGOs to efficiently organize initiatives, 
            manage resources, and maximize their social impact.
            <br />
            <br />
            By bringing people and purpose together through technology, 
            ImpactLink creates a connected ecosystem where every contribution drives positive change.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 duration-300">

            <FaBullseye className="text-5xl text-green-500 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-7">
              To connect volunteers and NGOs through technology, making social service more accessible, 
              organized, and impactful. ImpactLink helps people contribute their skills while enabling 
              organizations to create meaningful change.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 duration-300">

            <FaEye className="text-5xl text-blue-600 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-7">
              To build a connected world where everyone can easily participate 
              in social initiatives and contribute towards stronger, more empowered communities.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 duration-300">

            <FaHandsHelping className="text-5xl text-orange-500 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Community
            </h3>

            <p className="text-gray-600 leading-7">
              ImpactLink brings together volunteers, NGOs, and changemakers to 
              collaborate on causes like education, healthcare, environment, 
              and community development, creating a platform where every contribution matters.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-blue-700">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className="text-3xl text-blue-600" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>support@impactlink.org</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <FaPhoneAlt className="text-3xl text-green-600" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-red-500" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p>Hyderabad, Telangana, India</p>
              </div>
            </div>

          </div>

          <form className="bg-white rounded-2xl shadow-lg p-8 space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3"
            ></textarea>

            <button
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
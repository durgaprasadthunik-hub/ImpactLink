import { FaUsers, FaBuilding, FaCalendarAlt, FaCertificate } from "react-icons/fa";

function Impact() {
  const stats = [
    {
      icon: <FaUsers className="text-5xl text-blue-600 mb-4" />,
      number: "1200+",
      title: "Volunteers",
    },
    {
      icon: <FaBuilding className="text-5xl text-green-600 mb-4" />,
      number: "150+",
      title: "NGOs",
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-orange-500 mb-4" />,
      number: "300+",
      title: "Events",
    },
    {
      icon: <FaCertificate className="text-5xl text-purple-600 mb-4" />,
      number: "5000+",
      title: "Certificates",
    },
  ];

  return (
    <section className="bg-blue-700 py-20 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Our Impact
          </h2>

          <p className="mt-6 text-xl text-blue-100">
            Together we are building stronger communities through volunteering.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white text-black rounded-2xl p-8 shadow-xl text-center hover:scale-105 transition duration-300"
            >

              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold">
                {item.number}
              </h3>

              <p className="mt-4 text-lg font-semibold text-gray-600">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Impact;
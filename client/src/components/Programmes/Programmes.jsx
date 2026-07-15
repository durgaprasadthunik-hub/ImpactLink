import { Link } from "react-router-dom";
function Programmes() {
  const programmes = [
    {
      slug: "education",
      icon: "📚",
      title: "Education",
      description:
        "Support children's education through teaching, mentoring and literacy programs.",
      color: "text-yellow-500",
    },
    {
      slug: "healthcare",  
      icon: "❤️",
      title: "Healthcare",
      description:
        "Participate in blood donation camps, medical camps and health awareness drives.",
      color: "text-pink-500",
    },
    {
      slug: "environment",
      icon: "🌳",
      title: "Environment",
      description:
        "Join tree plantation, clean-up drives and environmental conservation activities.",
      color: "text-green-500",
    },
    {
      slug: "women empowerment",
      icon: "👩",
      title: "Women Empowerment",
      description:
        "Empower women through skill development, awareness and community engagement.",
      color: "text-cyan-500",
    },
    {
      slug: "food",
      icon: "🍛",
      title: "Food Distribution",
      description:
        "Help distribute meals and essential supplies to underprivileged communities.",
      color: "text-orange-500",
    },
    {
      slug: "community",  
      icon: "🤝",
      title: "Community Service",
      description:
        "Volunteer in social welfare initiatives that strengthen local communities.",
      color: "text-blue-500",
    },
  ];

  return (
    <section id="programmes" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
          OUR PROGRAMMES
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

  {programmes.map((item, index) => (

    <Link
      key={index}
      to={`/programmes/${item.slug}`}
      className="block"
    >

      <div className="flex items-start gap-6 p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">

        <div className={`text-6xl ${item.color}`}>
          {item.icon}
        </div>

        <div>

          <h3 className={`text-3xl font-extrabold uppercase ${item.color}`}>
            {item.title}
          </h3>

          <p className="mt-4 text-gray-700 text-lg leading-8">
            {item.description}
          </p>

        </div>

      </div>

    </Link>

  ))}

</div>

      </div>

    </section>
  );
}

export default Programmes;
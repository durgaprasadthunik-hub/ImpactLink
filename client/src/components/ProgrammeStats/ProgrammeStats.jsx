function ProgrammeStats({ stats }) {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl">📅</div>

            <h3 className="text-4xl font-bold text-blue-700 mt-4">
              {stats.events}
            </h3>

            <p className="mt-2 text-gray-600">
              Events
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl">👥</div>

            <h3 className="text-4xl font-bold text-green-600 mt-4">
              {stats.volunteers}
            </h3>

            <p className="mt-2 text-gray-600">
              Volunteers
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl">🎯</div>

            <h3 className="text-4xl font-bold text-orange-500 mt-4">
              {stats.beneficiaries}
            </h3>

            <p className="mt-2 text-gray-600">
              Beneficiaries
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl">⏳</div>

            <h3 className="text-4xl font-bold text-red-500 mt-4">
              {stats.hours}
            </h3>

            <p className="mt-2 text-gray-600">
              Volunteer Hours
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProgrammeStats;
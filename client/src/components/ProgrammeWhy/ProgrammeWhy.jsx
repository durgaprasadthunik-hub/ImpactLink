function ProgrammeWhy({ programme }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-extrabold uppercase text-gray-900 mb-6">
          WHY {programme.title}
        </h2>

        <p className="text-lg text-gray-700 leading-8">
          {programme.why}
        </p>

      </div>
    </section>
  );
}

export default ProgrammeWhy;
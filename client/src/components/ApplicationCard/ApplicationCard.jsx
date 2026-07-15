
function ApplicationCard({ application }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border">

      <h2 className="text-xl font-bold text-blue-700">
        {application.event.title}
      </h2>

      <p className="mt-2 text-gray-600">
        {application.event.description}
      </p>

      <div className="mt-4 space-y-2">

        <p>
          📍 <strong>Location:</strong> {application.event.location}
        </p>

        <p>
          📅 <strong>Date:</strong>{" "}
          {new Date(application.event.date).toLocaleDateString()}
        </p>

        <p>
          📌 <strong>Status:</strong>{" "}
          <span
            className={`font-semibold ${
              application.status === "Approved"
                ? "text-green-600"
                : application.status === "Rejected"
                ? "text-red-600"
                : "text-yellow-600"
            }`}
          >
            {application.status}
          </span>
        </p>

      </div>

    </div>
  );
}

export default ApplicationCard;
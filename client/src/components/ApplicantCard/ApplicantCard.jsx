import api from "../../services/api";
import { toast } from "react-toastify";

function ApplicantCard({ application, refreshApplicants }) {

  const updateStatus = async (status) => {
    try {

      const response = await api.put(
        `/applications/${application._id}/status`,
        { status }
      );

      console.log("Success:", response.data);

      toast.success(`Application ${status}`);

      // Refresh applicants list
      refreshApplicants();

    } catch (error) {

      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);

      toast.error(
        error.response?.data?.message || "Something went wrong"
      );

    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border">

      <h2 className="text-2xl font-bold text-blue-700">
        {application.volunteer.fullName}
      </h2>

      <p className="mt-2">
        📧 {application.volunteer.email}
      </p>

      <p>
        📍 {application.volunteer.location}
      </p>

      <p className="mt-2">
        <strong>Skills:</strong>{" "}
        {application.volunteer.skills.join(", ")}
      </p>

      <p className="mt-3">
        <strong>Status:</strong>{" "}
        <span
          className={
            application.status === "Approved"
              ? "text-green-600 font-bold"
              : application.status === "Rejected"
              ? "text-red-600 font-bold"
              : "text-yellow-600 font-bold"
          }
        >
          {application.status}
        </span>
      </p>

      <div className="flex gap-4 mt-6">

        <button
          onClick={() => updateStatus("Approved")}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          Approve
        </button>

        <button
          onClick={() => updateStatus("Rejected")}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          Reject
        </button>

      </div>

    </div>
  );
}

export default ApplicantCard;
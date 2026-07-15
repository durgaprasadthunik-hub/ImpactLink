import api from "../../services/api";

function CertificateCard({ application, refresh }) {

  if (!application) {
    return null;
  }

  const generateCertificate = async () => {
    try {

      await api.post(
        `/certificates/generate/${application.event._id}/${application.volunteer._id}`
      );

      toast.success("Certificate Generated Successfully!");

      if (refresh) refresh();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Certificate Generation Failed"
      );

    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold text-blue-700">
        {application?.volunteer?.fullName}
      </h2>

      <p className="mt-2">
        📧 {application?.volunteer?.email}
      </p>

      <p>
        📍 {application?.volunteer?.location}
      </p>

      <button
        onClick={generateCertificate}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
      >
        Generate Certificate
      </button>

    </div>
  );
}

export default CertificateCard;
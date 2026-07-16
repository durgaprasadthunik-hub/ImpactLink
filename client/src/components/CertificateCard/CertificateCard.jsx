import api from "../../services/api";
import { toast } from "react-toastify";

function CertificateCard({ application, refresh }) {
  if (!application) return null;

  const generateCertificate = async () => {
    try {
      const response = await api.post(
        `/certificates/generate/${application.event._id}/${application.volunteer._id}`,
        {},
        {
          responseType: "blob",
        }
      );

      // Create PDF Blob
      const blob = new Blob([response.data], {
        type: "application/pdf",
      });

      // Create Download Link
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = `${application.volunteer.fullName}_Certificate.pdf`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      toast.success("Certificate Downloaded Successfully!");

      if (refresh) {
        refresh();
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Certificate Generation Failed"
      );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">

      <h2 className="text-2xl font-bold text-blue-700">
        {application.volunteer?.fullName}
      </h2>

      <p className="mt-3">
        <strong>Email:</strong> {application.volunteer?.email}
      </p>

      <p className="mt-1">
        <strong>Location:</strong> {application.volunteer?.location}
      </p>

      <p className="mt-1">
        <strong>Event:</strong> {application.event?.title}
      </p>

      <button
        onClick={generateCertificate}
        className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
      >
        Generate & Download Certificate
      </button>
    </div>
  );
}

export default CertificateCard;
import { useEffect, useState } from "react";
import api from "../../services/api";
import { jsPDF } from "jspdf";

function MyCertificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await api.get("/certificates/my");
      setCertificates(response.data.certificates);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadCertificate = (certificate) => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  // Colors
  const blue = [20, 70, 170];
  const gold = [212, 175, 55];

  // ===== Outer Border =====
  doc.setDrawColor(...blue);
  doc.setLineWidth(2);
  doc.rect(10, 10, 277, 190);

  // ===== Inner Border =====
  doc.setDrawColor(...gold);
  doc.setLineWidth(0.8);
  doc.rect(15, 15, 267, 180);

  // ===== Header =====
  doc.setTextColor(...blue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("IMPACTLINK", 148, 30, { align: "center" });

  doc.setFontSize(22);
  doc.text("Certificate of Appreciation", 148, 45, {
    align: "center",
  });

  // ===== Intro =====
  doc.setTextColor(0, 0, 0);
  doc.setFont("times", "italic");
  doc.setFontSize(15);
  doc.text("This Certificate is Proudly Presented To", 148, 65, {
    align: "center",
  });

  // ===== Volunteer Name =====
  doc.setFont("times", "bold");
  doc.setFontSize(30);
  doc.setTextColor(...blue);
  doc.text(
    certificate.volunteer?.fullName || "Volunteer",
    148,
    82,
    { align: "center" }
  );

  // Decorative line
  doc.setDrawColor(...gold);
  doc.setLineWidth(0.5);
  doc.line(80, 88, 216, 88);

  // ===== Event =====
  doc.setFont("times", "normal");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);

  doc.text(
    "For outstanding dedication and valuable contribution",
    148,
    105,
    { align: "center" }
  );

  doc.text(
    `during "${certificate.event.title}"`,
    148,
    117,
    { align: "center" }
  );

  // ===== Details =====
  doc.setFontSize(15);

  doc.text(
    `Volunteer Hours : ${certificate.hours}`,
    55,
    145
  );

  doc.text(
    `Certificate ID : ${certificate.certificateNumber}`,
    55,
    158
  );

  doc.text(
    `Issued By : ${certificate.issuedBy.fullName}`,
    55,
    171
  );

  doc.text(
    `Issue Date : ${new Date().toLocaleDateString()}`,
    185,
    145
  );

  // ===== Gold Seal =====
  doc.setFillColor(...gold);
  doc.circle(240, 155, 12, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text("CERTIFIED", 240, 156, {
    align: "center",
  });

  // ===== Signature =====
  doc.setTextColor(0, 0, 0);

  doc.line(185, 175, 255, 175);

  doc.setFont("times", "italic");
  doc.text("Authorized Signature", 220, 182, {
    align: "center",
  });

  // ===== Footer =====
  doc.setTextColor(...blue);
  doc.setFont("times", "italic");
  doc.setFontSize(16);

  doc.text(
    "Thank you for making a difference in the community!",
    148,
    192,
    {
      align: "center",
    }
  );

  doc.save(`${certificate.event.title}-Certificate.pdf`);
};

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        My Certificates
      </h1>

      {certificates.length === 0 ? (

        <div className="bg-white p-8 rounded-xl shadow">
          No Certificates Yet
        </div>

      ) : (

        <div className="grid md:grid-cols-2 gap-6">

          {certificates.map((certificate) => (

            <div
              key={certificate._id}
              className="bg-white rounded-xl shadow-lg p-6"
            >

              <h2 className="text-2xl font-bold text-blue-700">
                {certificate.event.title}
              </h2>

              <p className="mt-3">
                Hours : {certificate.hours}
              </p>

              <p>
                Certificate No : {certificate.certificateNumber}
              </p>

              <p>
                Issued By : {certificate.issuedBy.fullName}
              </p>

              <button
                onClick={() => downloadCertificate(certificate)}
                className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg"
              >
                Download Certificate
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default MyCertificates;
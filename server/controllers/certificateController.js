const PDFDocument = require("pdfkit");

const Certificate = require("../models/Certificate");
const Attendance = require("../models/Attendance");
const Application = require("../models/Application");
const User = require("../models/User");
const Event = require("../models/Event");

// Generate Certificate
const generateCertificate = async (req, res) => {
  try {
    const { eventId, volunteerId } = req.params;

    const application = await Application.findOne({
      event: eventId,
      volunteer: volunteerId,
      status: "Approved",
    });

    if (!application) {
      return res.status(400).json({
        success: false,
        message: "Volunteer is not approved",
      });
    }

    const attendance = await Attendance.findOne({
      event: eventId,
      volunteer: volunteerId,
      attendance: true,
    });

    if (!attendance) {
      return res.status(400).json({
        success: false,
        message: "Attendance not found",
      });
    }

    const volunteer = await User.findById(volunteerId);
    const event = await Event.findById(eventId);

    let certificate = await Certificate.findOne({
      volunteer: volunteerId,
      event: eventId,
    });

    if (!certificate) {
      certificate = await Certificate.create({
        volunteer: volunteerId,
        event: eventId,
        issuedBy: req.user._id,
        hours: attendance.hours,
        certificateNumber: "CERT-" + Date.now(),
      });
    }

    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
      margin: 50,
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${volunteer.fullName}_Certificate.pdf`
    );

    doc.pipe(res);

    // Border
    doc
      .lineWidth(4)
      .rect(20, 20, 800, 550)
      .stroke("#1E40AF");

    // Title
    doc
      .fontSize(32)
      .fillColor("#1E40AF")
      .text("IMPACTLINK", {
        align: "center",
      });

    doc.moveDown();

    doc
      .fontSize(26)
      .fillColor("black")
      .text("CERTIFICATE OF APPRECIATION", {
        align: "center",
      });

    doc.moveDown(2);

    doc
      .fontSize(18)
      .text("This certificate is proudly presented to", {
        align: "center",
      });

    doc.moveDown();

    doc
      .fontSize(30)
      .fillColor("#16A34A")
      .text(volunteer.fullName, {
        align: "center",
      });

    doc.moveDown();

    doc
      .fontSize(18)
      .fillColor("black")
      .text(
        `for successfully participating in "${event.title}"`,
        {
          align: "center",
        }
      );

    doc.moveDown();

    doc.text(
      `Service Hours : ${attendance.hours}`,
      {
        align: "center",
      }
    );

    doc.moveDown();

    doc.text(
      `Certificate Number : ${certificate.certificateNumber}`,
      {
        align: "center",
      }
    );

    doc.moveDown();

    doc.text(
      `Issued Date : ${new Date().toLocaleDateString()}`,
      {
        align: "center",
      }
    );

    doc.moveDown(3);

    doc.text("Authorized by ImpactLink", {
      align: "center",
    });

    doc.end();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get My Certificates
const getMyCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find({
      volunteer: req.user._id,
    })
      .populate("event")
      .populate("issuedBy", "fullName email");

    res.status(200).json({
      success: true,
      certificates,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateCertificate,
  getMyCertificates,
};
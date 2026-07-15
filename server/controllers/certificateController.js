const Certificate = require("../models/Certificate");
const Attendance = require("../models/Attendance");
const Application = require("../models/Application");

// Generate Certificate

const generateCertificate = async (req, res) => {
  try {

    const { eventId, volunteerId } = req.params;

    // Check accepted application
    const application = await Application.findOne({
      event: eventId,
      volunteer: volunteerId,
      status: "Approved",
    });

    if (!application) {
      return res.status(400).json({
        success: false,
        message: "Volunteer is not accepted",
      });
    }

    // Check attendance
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

    // Prevent duplicate certificates
    const existingCertificate = await Certificate.findOne({
      event: eventId,
      volunteer: volunteerId,
    });

    if (existingCertificate) {
      return res.status(400).json({
        success: false,
        message: "Certificate already generated",
      });
    }

    // Create certificate
    const certificate = await Certificate.create({
      volunteer: volunteerId,
      event: eventId,
      issuedBy: req.user._id,
      hours: attendance.hours,
      certificateNumber: "CERT-" + Date.now(),
    });

    res.status(201).json({
      success: true,
      message: "Certificate Generated Successfully",
      certificate,
    });

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
      count: certificates.length,
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
    getMyCertificates
    
};
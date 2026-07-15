const Event = require("../models/Event");
const Application = require("../models/Application");
const Attendance = require("../models/Attendance");
const Certificate = require("../models/Certificate");

const getNGODashboard = async (req, res) => {
  try {

    const ngoId = req.user._id;

    const events = await Event.find({ organizer: ngoId });

    const eventIds = events.map(event => event._id);

    const totalApplications = await Application.countDocuments({
      event: { $in: eventIds },
    });

    const totalAttendance = await Attendance.countDocuments({
      event: { $in: eventIds },
      attendance: true,
    });

    const totalCertificates = await Certificate.countDocuments({
      event: { $in: eventIds },
    });

    res.json({
      success: true,
      analytics: {
        totalEvents: events.length,
        totalApplications,
        totalAttendance,
        totalCertificates,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
const getVolunteerDashboard = async (req, res) => {
  try {

    const volunteerId = req.user._id;

    const totalApplications = await Application.countDocuments({
      volunteer: volunteerId,
    });

    const totalAttendance = await Attendance.countDocuments({
      volunteer: volunteerId,
      attendance: true,
    });

    const certificates = await Certificate.find({
      volunteer: volunteerId,
    });

    const totalHours = certificates.reduce(
      (sum, certificate) => sum + certificate.hours,
      0
    );

    res.status(200).json({
      success: true,
      analytics: {
        totalApplications,
        totalAttendance,
        totalCertificates: certificates.length,
        totalHours,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getNGODashboard,
  getVolunteerDashboard,
};
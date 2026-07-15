const Event = require("../models/Event");
const Application = require("../models/Application");
const Certificate = require("../models/Certificate");

const getAnalytics = async (req, res) => {
  try {
    const totalEvents = await Event.countDocuments({
      organizer: req.user._id,
    });

    const events = await Event.find({
      organizer: req.user._id,
    });

    const eventIds = events.map((event) => event._id);

    const totalApplications = await Application.countDocuments({
      event: { $in: eventIds },
    });

    const totalAttendance = await Application.countDocuments({
      event: { $in: eventIds },
      attendance: true,
    });

    const totalCertificates = await Certificate.countDocuments({
      event: { $in: eventIds },
    });

    res.status(200).json({
      success: true,
      analytics: {
        totalEvents,
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

module.exports = {
  getAnalytics,
};
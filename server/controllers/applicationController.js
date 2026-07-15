const Application = require("../models/Application");
const Event = require("../models/Event");

// Volunteer Apply for Event
const applyForEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    const alreadyApplied = await Application.findOne({
      volunteer: req.user._id,
      event: eventId,
    });

    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message: "You already applied for this event",
      });
    }

    const application = await Application.create({
      volunteer: req.user._id,
      event: eventId,
    });

    res.status(201).json({
      success: true,
      message: "Applied Successfully",
      application,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Volunteer - My Applications
const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      volunteer: req.user._id,
    }).populate("event");

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// NGO - All Applicants for ONE Event
const getApplicantsForEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    if (event.organizer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    const applications = await Application.find({
      event: eventId,
    })
      .populate("volunteer", "-password")
      .populate("event");

    res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ⭐ NEW - NGO All Applications
const getNGOApplications = async (req, res) => {
  try {

    const events = await Event.find({
      organizer: req.user._id,
    });

    const eventIds = events.map(event => event._id);

    const applications = await Application.find({
      event: { $in: eventIds }
    })
      .populate("volunteer", "-password")
      .populate("event");

    res.status(200).json({
      success: true,
      applications,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// NGO - Approve / Reject
const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const application = await Application.findById(req.params.applicationId);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    const validStatuses = [
      "Pending",
      "Approved",
      "Rejected",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    application.status = status;

    await application.save();

    res.status(200).json({
      success: true,
      message: "Application Updated",
      application,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  applyForEvent,
  getMyApplications,
  getApplicantsForEvent,
  getNGOApplications,
  updateApplicationStatus,
};
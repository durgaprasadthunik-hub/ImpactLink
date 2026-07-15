const Application = require("../models/Application");
const Event = require("../models/Event");

// Volunteer Apply for Event
const applyForEvent = async (req, res) => {
  try {

    const eventId = req.params.eventId;

    // Check if event exists
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // Check duplicate application
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

    // Create application
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
// Get My Applications
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
// NGO - Get All Applicants for an Event

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

    // Make sure this NGO owns the event
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
// Accept / Reject Application

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

    const validStatuses = ["Pending", "Approved", "Rejected"];

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
      message: "Application status updated successfully",
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
  updateApplicationStatus,
};
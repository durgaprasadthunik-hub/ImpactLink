const Event = require("../models/Event");

// Create Event
const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      date,
      requiredSkills,
      maxVolunteers,
    } = req.body;

    const event = await Event.create({
      title,
      description,
      location,
      date,
      requiredSkills,
      interests,
      maxVolunteers,
      organizer: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Event Created Successfully",
      event,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get All Events
const getAllEvents = async (req, res) => {
  try {

    const events = await Event.find();

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// Get Event By ID

const getEventById = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found"
      });
    }

    res.status(200).json({
      success: true,
      event
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
// Update Event

const updateEvent = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Event Updated Successfully",
      event: updatedEvent,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// Delete Event

const deleteEvent = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Event Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};

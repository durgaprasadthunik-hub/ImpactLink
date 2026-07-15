const User = require("../models/User");
const Event = require("../models/Event");
const Application = require("../models/Application");

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get NGOs only
const getNGOs = async (req, res) => {
  try {
    const ngos = await User.find({ role: "ngo" }).select("-password");

    res.status(200).json({
      success: true,
      ngos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .populate("organizer", "fullName email");

    res.status(200).json({
      success: true,
      events,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Event
const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("volunteer", "fullName email")
      .populate("event", "title location date");

    res.status(200).json({
      success: true,
      applications,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteNGO = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "NGO deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalVolunteers = await User.countDocuments({ role: "volunteer" });
    const totalNGOs = await User.countDocuments({ role: "ngo" });
    const totalEvents = await Event.countDocuments();
    const totalApplications = await Application.countDocuments();

    const recentUsers = await User.find()
      .sort({ createdAt: -1 })
      .limit(3);

    const recentEvents = await Event.find()
      .sort({ createdAt: -1 })
      .limit(3);

    res.json({
      totalUsers,
      totalVolunteers,
      totalNGOs,
      totalEvents,
      totalApplications,
      recentUsers,
      recentEvents,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  getUsers,
  getNGOs,
  getEvents,
  getApplications,
  deleteNGO,
  deleteEvent,
  getDashboard,
};
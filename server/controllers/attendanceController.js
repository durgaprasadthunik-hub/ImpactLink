const Attendance = require("../models/Attendance");
const User = require("../models/User");
const Application = require("../models/Application");

// Mark Attendance

const markAttendance = async (req, res) => {
  try {

    const { eventId, volunteerId, attendance, hours } = req.body;

    const application = await Application.findOne({
  event: eventId,
  volunteer: volunteerId,
});

if (!application) {
  return res.status(404).json({
    success: false,
    message: "Volunteer has not applied for this event",
  });
}

if (application.status !== "Approved") {
  return res.status(400).json({
    success: false,
    message: "Volunteer is not approved for this event",
  });
}

    // Check if attendance already exists
    let record = await Attendance.findOne({
      event: eventId,
      volunteer: volunteerId,
    });

    if (record) {
      return res.status(400).json({
        success: false,
        message: "Attendance already marked",
      });
    }

    // Create attendance record
    record = await Attendance.create({
      event: eventId,
      volunteer: volunteerId,
      attendance,
      hours,
      markedBy: req.user._id,
    });

    // Update volunteer total hours
    if (attendance) {
      await User.findByIdAndUpdate(
        volunteerId,
        {
          $inc: { totalHours: hours },
        }
      );
    }

    res.status(201).json({
      success: true,
      message: "Attendance marked successfully",
      attendance: record,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// Get Attendance by Event

const getAttendanceByEvent = async (req, res) => {
  try {

    const attendance = await Attendance.find({
      event: req.params.eventId,
    })
      .populate("volunteer", "-password")
      .populate("event");

    res.status(200).json({
      success: true,
      count: attendance.length,
      attendance,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// Get My Attendance

const getMyAttendance = async (req, res) => {
  try {

    const attendance = await Attendance.find({
      volunteer: req.user._id,
    }).populate("event");

    res.status(200).json({
      success: true,
      count: attendance.length,
      attendance,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  markAttendance,
  getAttendanceByEvent,
  getMyAttendance,
};
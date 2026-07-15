const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    volunteer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    attendance: {
      type: Boolean,
      default: false,
    },

    hours: {
      type: Number,
      default: 0,
    },

    markedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Attendance", attendanceSchema);
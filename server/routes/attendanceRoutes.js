const express = require("express");
const router = express.Router();

const { markAttendance, getAttendanceByEvent, getMyAttendance} = require("../controllers/attendanceController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");



router.post(
  "/mark",
  protect,
  authorizeRoles("ngo"),
  markAttendance
);
router.get(
  "/event/:eventId",
  protect,
  authorizeRoles("ngo"),
  getAttendanceByEvent
);
router.get(
  "/my",
  protect,
  authorizeRoles("volunteer"),
  getMyAttendance
);

module.exports = router;
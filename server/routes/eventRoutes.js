const express = require("express");
const router = express.Router();

const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.put("/:id", protect, authorizeRoles("ngo"), updateEvent);
router.delete("/:id", protect, authorizeRoles("ngo"), deleteEvent);

// Only NGO can create events
router.post(
  "/",
  protect,
  authorizeRoles("ngo"),
  createEvent
);

module.exports = router;
const express = require("express");
const router = express.Router();

const { applyForEvent, getMyApplications, getApplicantsForEvent, updateApplicationStatus } = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Volunteer applies for an event
router.post(
  "/apply/:eventId",
  protect,
  authorizeRoles("volunteer"),
  applyForEvent
  
);
// Get my applications
router.get(
  "/my",
  protect,
  authorizeRoles("volunteer"),
  getMyApplications
);
// NGO - Get all applicants for an event
router.get(
  "/event/:eventId",
  protect,
  authorizeRoles("ngo"),
  getApplicantsForEvent
);
// NGO - Update application status
router.put(
  "/:applicationId/status",
  protect,
  authorizeRoles("ngo"),
  updateApplicationStatus
);

module.exports = router;
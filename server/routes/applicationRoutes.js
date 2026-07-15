const express = require("express");
const router = express.Router();

const {
  applyForEvent,
  getMyApplications,
  getApplicantsForEvent,
  getNGOApplications,
  updateApplicationStatus,
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Volunteer applies
router.post(
  "/apply/:eventId",
  protect,
  authorizeRoles("volunteer"),
  applyForEvent
);

// Volunteer applications
router.get(
  "/my",
  protect,
  authorizeRoles("volunteer"),
  getMyApplications
);

// NGO - Applicants for one event
router.get(
  "/event/:eventId",
  protect,
  authorizeRoles("ngo"),
  getApplicantsForEvent
);

// ⭐ NGO - All applications for all my events
router.get(
  "/ngo",
  protect,
  authorizeRoles("ngo"),
  getNGOApplications
);

// NGO - Approve / Reject
router.put(
  "/:applicationId/status",
  protect,
  authorizeRoles("ngo"),
  updateApplicationStatus
);

module.exports = router;
const express = require("express");
const router = express.Router();

const { getNGODashboard, getVolunteerDashboard } = require("../controllers/dashboardController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

router.get(
  "/ngo",
  protect,
  authorizeRoles("ngo"),
  getNGODashboard
);
router.get(
  "/volunteer",
  protect,
  authorizeRoles("volunteer"),
  getVolunteerDashboard
);

module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getAnalytics,
} = require("../controllers/analyticsController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

router.get(
  "/",
  protect,
  authorizeRoles("ngo"),
  getAnalytics
);

module.exports = router;
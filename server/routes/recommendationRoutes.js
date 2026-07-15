const express = require("express");
const router = express.Router();

const {
  getRecommendations,
} = require("../controllers/recommendationController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

router.get(
  "/",
  protect,
  authorizeRoles("volunteer"),
  getRecommendations
);

module.exports = router;
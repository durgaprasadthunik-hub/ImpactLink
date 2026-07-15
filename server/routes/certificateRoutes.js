const express = require("express");
const router = express.Router();

const { generateCertificate, getMyCertificates } = require("../controllers/certificateController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles }= require("../middleware/roleMiddleware");

router.post(
    "/generate/:eventId/:volunteerId",
    protect,
    authorizeRoles("ngo"),
    generateCertificate
);
router.get(
  "/my",
  protect,
  authorizeRoles("volunteer"),
  getMyCertificates
);

module.exports = router;
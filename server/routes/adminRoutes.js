const express = require("express");
const router = express.Router();

const {
  getUsers,
  getNGOs,
  getEvents,
  getApplications,
  deleteNGO,
  deleteEvent,
  getDashboard,
} = require("../controllers/adminController");

router.get("/users", getUsers);
router.get("/ngos", getNGOs);
router.get("/events", getEvents);
router.get("/applications", getApplications);
router.delete("/ngos/:id", deleteNGO);
router.delete("/events/:id", deleteEvent);
router.get("/dashboard", getDashboard);

module.exports = router;
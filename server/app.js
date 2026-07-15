const express = require("express");
const cors = require("cors");

const app = express();

// Import Routes
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const userRoutes = require("./routes/userRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const adminRoutes = require("./routes/adminRoutes");


// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Welcome to VolunteerHub AI API");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
const User = require("../models/User");
const Event = require("../models/Event");

const getRecommendations = async (req, res) => {
  try {

    const volunteer = await User.findById(req.user._id);

    if (!volunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    const events = await Event.find();

    const recommendations = events.map((event) => {

      let score = 0;

      // Skill Match (40 Points)
      const skillMatches = event.requiredSkills.filter(skill =>
        volunteer.skills.includes(skill)
      );

      if (skillMatches.length > 0) {
        score += 40;
      }

      // Interest Match (30 Points)
      const interestMatches = event.interests.filter(interest =>
        volunteer.interests.includes(interest)
      );

      if (interestMatches.length > 0) {
        score += 30;
      }

      // Location Match (20 Points)
      if (
        event.location.toLowerCase() ===
        volunteer.location.toLowerCase()
      ) {
        score += 20;
      }

      // Availability Bonus (10 Points)
      if (volunteer.availability) {
        score += 10;
      }

      return {
        ...event.toObject(),
        matchScore: score,
      };

    });

    recommendations.sort(
      (a, b) => b.matchScore - a.matchScore
    );

    res.status(200).json({
      success: true,
      recommendations,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getRecommendations,
};
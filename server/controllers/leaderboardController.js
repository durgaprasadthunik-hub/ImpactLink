const User = require("../models/User");

const getLeaderboard = async (req, res) => {
  try {

    const volunteers = await User.find({
      role: "volunteer",
    })
      .select("-password")
      .sort({
        totalHours: -1,
      });

    res.status(200).json({
      success: true,
      count: volunteers.length,
      volunteers,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getLeaderboard,
};
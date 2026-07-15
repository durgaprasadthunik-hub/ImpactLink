const User = require("../models/User");

// ================= Get Profile =================

const getProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id).select("-password");

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= Update Profile =================

const updateProfile = async (req, res) => {
  try {

    const {
      fullName,
      phone,
      location,
      skills,
      interests,
      availability,
    } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.fullName = fullName;
    user.phone = phone;
    user.location = location;
    user.skills = skills;
    user.interests = interests;
    user.availability = availability;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getProfile,
  updateProfile,
};
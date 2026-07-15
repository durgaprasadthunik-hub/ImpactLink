const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Register User
const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      role,
      phone,
      location,
      skills,
      interests,
      availability,
    } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role,
      phone,
      location,
      skills,
      interests,
      availability,
    });

    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user: userResponse,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ================= Login User =================

const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate JWT Token
    const token = generateToken(user._id);

    // Remove password before sending response
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: userResponse,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get Logged In User Profile

const getProfile = async (req, res) => {

    res.status(200).json({

        success: true,
        user: req.user

    });

};


module.exports = {
  registerUser,
  loginUser,
  getProfile,
  
};

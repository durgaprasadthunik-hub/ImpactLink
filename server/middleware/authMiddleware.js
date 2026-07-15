const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {

    let token;

    // Check if Authorization header exists
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {

      // Extract token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user and attach to request
      req.user = await User.findById(decoded.id).select("-password");

      next();

    } else {

      return res.status(401).json({
        success: false,
        message: "No token provided",
      });

    }

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });

  }
};

module.exports = {
  protect,
};
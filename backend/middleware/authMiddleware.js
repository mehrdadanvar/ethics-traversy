const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header which requires splitting the bearer.(there is a space there thats why
      //  we use an empty space in the following split method and use the first portion)
      token = req.headers.authorization.split(" ")[1];
      // verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get the user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Holly Jesus! you are not authorized to be here!");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No token");
  }
});

module.exports = { protect };

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @description Register new user
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please make sure all the required fields are provided!");
  }
  //check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("You are already registered, you should go to login");
  }
  // hash the password fo rsending to the databases
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create and save the user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400);
    throw new Error("Invalid user data!");
  }

  // res.json({message:'this is to register a user'})
});
// @description Authenticate a new user
//@route    POST /api/login
//@access   Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "this is login a user" });
});
// @description Get user data
//@route    GET /api/users/me
//@access   Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "show user data" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

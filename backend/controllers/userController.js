const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @description Register new user
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  if (!firstname || !lastname || !username || !email || !password) {
    res.status(400);
    throw new Error("please make sure all the required fields are provided!");
  }
  //check if user already exists
  const userExists = await User.findOne({ email });
  console.log(userExists);
  if (userExists) {
    res.status(400);
    throw new Error("You are already registered, you should go to login");
  }
  // hash the password fo rsending to the databases
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create and save the user
  const user = await User.create({
    firstname,
    lastname,
    username,
    email,
    password: hashedPassword,
  });
  // checking to see the user and responding with user details
  if (user) {
    res.status(201).json({
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
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
  // check for the email and password
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("please provide both the email and password");
  }
  const user = await User.findOne({ email });
  if (user && bcrypt.compare(password, user.password)) {
    res.json({
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
  // res.json({ message: "this is login a user" });
});
// @description Get user data
//@route    GET /api/users/me
//@access   Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    username,
    email,
  });
});
// generating a JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

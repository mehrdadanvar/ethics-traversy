const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);

// @description Register new user
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
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
  const activationCode = Math.random().toString().substr(2, 6);
  const user = await User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    activation_code: activationCode,
    // is_activated: false,
  });
  // checking to see the user and responding with user details
  if (user) {
    res.status(201).json({
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      token: generateToken(user._id),
      activation_status: user.is_activated,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data!");
  }
  //Sending an email to the users provide email using the sendGrid API
  const validuser = await User.findOne({ email });
  console.log(validuser);
  if (validuser) {
    const message = {
      to: validuser.email,
      from: {
        name: "negothics.ca",
        email: "m.anvar@student.fdu.edu",
      },
      subject: "Activation Code from the Negothics Registration",
      text: `Dear ${validuser.firstname}, Welcome no Negothics.Please Copy the code below and paste it in the activation box on the website,${validuser.activation_code}`,
    };
    await sgMail
      .send(message)
      .then((response) => console.log("email sent successfully!"))
      .catch((error) => console.log(error.message));
  } else {
    throw new Error("Your email address does not exist in the database. Try again");
  }
});
//@description Activate a user who has already signed up successfully
//@route POST /api/activate
//@access Private
//First create a function called activateuser which handles functionality for this route
// Step one extract the users email address and claimed activation code from the request object sent from the front end and store them in an OBJECT
const activateUser = asyncHandler(async (req, res) => {
  const { email, secret } = req.body;
  const retrieved_user = await User.findOne({ email });
  if (!retrieved_user) {
    res.status(400);
    throw new Error(
      "the email you provided does not exist in the database, refer to sign up again"
    );
  }
  console.log(secret, retrieved_user.activation_code);
  if (secret !== retrieved_user.activation_code) {
    res.status(400);
    throw new Error(
      "the provided activation code does not match the one sent through email!"
    );
  }
  if (secret === retrieved_user.activation_code) {
    const activated_user = await User.findOneAndUpdate(
      { email: email },
      { is_activated: true },
      { new: true }
    );
    res.status(204).json(activated_user);
  }
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
//@route    GET /api/users/mw
//@access   Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    email,
  });
});
// generating a JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @description Get all users data
//@route    GET /api/users/
//@access   Private

const queryAll = asyncHandler(async (req, res) => {
  // const { _id, firstname, lastname, email, password } = await User.find({});
  const test = await User.find({});
  const test2 = JSON.stringify(test);
  console.log("query satisfied");
  res.status(200).json({
    test,
  });
});

module.exports = {
  registerUser,
  loginUser,
  activateUser,
  getMe,
  queryAll,
};

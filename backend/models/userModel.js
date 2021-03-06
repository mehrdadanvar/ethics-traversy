const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "please add your first name"],
    },
    lastname: {
      type: String,
      required: [true, "please add your last name"],
    },
    email: {
      type: String,
      required: [true, "please type in your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
    },
    is_activated: {
      type: Boolean,
      default: false,
    },
    activation_code: {
      type: String,
    },
  },
  {
    timestapms: true,
  }
);
module.exports = mongoose.model("User", userSchema);

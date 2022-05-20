const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add your name"],
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
  },
  { timestapms: true }
);
module.exports = mongoose.model("User", userSchema);

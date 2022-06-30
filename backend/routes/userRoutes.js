const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  activateUser,
  getMe,
  queryAll,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/activate", activateUser);
router.get("/me", protect, getMe);
router.get("/", queryAll);

module.exports = router;

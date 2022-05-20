const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoal,
} = require("../controllers/goalController");
// calling the protect middleware
const { protect } = require("../middleware/authMiddleware");
//
router.get("/", protect, getGoals);
router.post("/", protect, setGoal);
// do it even cleaner by the following syntanx if you like
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoals).delete(deleteGoal)

router.put("/:id", protect, updateGoals);
router.delete("/:id", protect, deleteGoal);

module.exports = router;

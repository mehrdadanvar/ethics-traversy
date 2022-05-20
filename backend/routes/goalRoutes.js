const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoal,
} = require("../controllers/goalController");

//
router.get("/", getGoals);
router.post("/", setGoal);
// do it even cleaner by the following syntanx if you like
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoals).delete(deleteGoal)

router.put("/:id", updateGoals);
router.delete("/:id", deleteGoal);

module.exports = router;

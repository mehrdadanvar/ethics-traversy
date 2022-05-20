const asyncHandler = require("express-async-handler");

// bringing in the mongoose model and schema

const Goal = require("../models/goalModel");

// @desc    Get gaols
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  //res.status(200).json({message:'we are getting gaols here!'})
  res.status(200).json(goals);
});

// @desc    Set gaol
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error(
      "please inculde a text field in the request body so that the api return some shit to you"
    );
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  // res.status(200).json({message:'we are setting gaols here remember it is singular and a post request!'})
  res.status(200).json(goal);
});

// @desc    Update gaol
// @route   PUT /api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("oops there are no goals to be found!");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
  //res.status(200).json({ message: `update goal number ${req.params.id}` });
});

// @desc    Delete gaols
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error(`we didnt find any items by the id of ${req.params.id}`);
  }
  //await Goal.findOneAndDelete(req.params.id)
  await goal.remove();
  res.status(200).json({ id: req.params.id });
  // res.status(200).json({ message: `yohoooy we are feleting goal number ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoal,
};

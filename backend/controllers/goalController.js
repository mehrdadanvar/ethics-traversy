const asyncHandler = require('express-async-handler');
// @desc    Get gaols
// @route   GET /api/goals
// @access  Private 
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message:'we are getting gaols here!'})
});


// @desc    Set gaol
// @route   POST /api/goals
// @access  Private 
const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please inculde a text field in the request body so that the api return some shit to you')
    }
    res.status(200).json({message:'we are setting gaols here remember it is singular and a post request!'})
});

// @desc    Update gaol
// @route   PUT /api/goals/:id
// @access  Private 
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message:`update goal number ${req.params.id}`})
});


// @desc    Delete gaols
// @route   DELETE /api/goals/:id
// @access  Private 
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `yohoooy we are feleting goal number ${req.params.id}`})
});





module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoal
};
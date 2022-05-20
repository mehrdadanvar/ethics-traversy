// @description Register new user
//@route    POST /api/users
//@access   Public 
const registerUser = (req,res)=>{
    res.json({message:'this is to register a user'})
};
// @description Authenticate a new user
//@route    POST /api/login
//@access   Public 
const loginUser = (req,res)=>{
    res.json({message:'this is login a user'})
};
// @description Get user data 
//@route    GET /api/users/me
//@access   Public 
const getMe = (req,res)=>{
    res.json({message:'show user data'})
};

module.exports = {
    registerUser,
    loginUser,
    getMe
};
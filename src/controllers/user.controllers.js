import asyncHandler from '../utils/asynchandler.js';
const registerUser = asyncHandler(async (req, res) => {
        const {userName, email, password} = req.body;
        console.log("email:", email)
        console.log("password:", password)
})

export {registerUser}


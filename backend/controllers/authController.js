const User = require('../models/userModels');
const ErrorResponse = require('../utils/errorResponse')


exports.signup= async (req,res,next)=>{
    const {email}= req.body;
    const userExist = await User.findOne({email})
    if (userExist){
        return next(new ErrorResponse("Email alreaddy regestered",400));

    }
    try{
        const user = await User.create(req.body);
        res.status(201).json({
            success:true,
            user
        })
    }
    catch(error){
        next(error);
    }
}
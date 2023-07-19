const User = require('../models/userModels');
const ErrorResponse = require('../utils/errorResponse');

exports.signup = async (req, res, next) => {
  const { email } = req.query; // Access query parameter "email" from req.query object
  if (!email) {
    return next(new ErrorResponse('Email is required', 400));
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new ErrorResponse('Email already registered', 400));
  }

  try {
    const user = await User.create({ email }); // Create the user with the provided email
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};


exports.getAllUsers = async (req, res, next) => {
    try {
      const users = await User.find({}); // Retrieve all users from the database
      res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      next(error);
    }
  };
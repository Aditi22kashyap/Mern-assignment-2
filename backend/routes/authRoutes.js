const express =require('express');
const {signup} = require('../controllers/authController');
const router = express.Router();

// auth routes 

router.get('/signup',signup);
router.post('/signup', signup);
router.get('/users', getAllUsers);
module.exports = router;


const router = require('express').Router();
const Exercise = require('../models/Exercise');
const trainingService = require('../services/trainingService');
const cookieParser = require("cookie-parser");
const authService = require("../services/AuthService");


router.get('/getWorkoutPlans', (req, res) => {
    res.status(200).json({'workoutPlans': [{0: 0}]}); // Assuming an empty array for workout plans
 });

 
 router.post('/createExercise', async (req, res) => {
    const exercise = req.body;

    try {
        await Exercise.create(exercise);
        res.status(200).json({Created: 'SUCCESSFULY'});
    } catch (error) {
     
    }
 });

 router.get('/getProfile', async (req, res) => {
  const user = req.body;
  try{
    const foundedUser = await authService.getProfile(user);
    res.status(200).json({user: foundedUser});
  } catch(err) {
    res.status(404).json({message: 'User not found'})
  }
 })



 
 router.post('/login', async (req, res) => {
    const loginData = req.body;

      try {
        const token = await authService.login(loginData);
        
        res.cookie('auth', token, {
          httpOnly: true,
          secure: false,
        });

        res.status(200).json({ token });

    } catch (err) {
      
        res.status(401).json({ error: 'Authentication failed' });
    }
  });

  router.post('/register', async (req, res) => {
    const registerData = req.body;

    try {
      const token = await authService.register(registerData);
      
      res.cookie('auth', token, {
        httpOnly: true,
        secure: false,
      });

      res.status(200).json({ token });
      
    } catch (err) {
        res.status(409).json({ error: 'User already exists' });
    }
  });
  
  router.post('/logout', (req, res) => {
    res.clearCookie('auth');
    res.status(200).json({ message: 'Logout successful' });
  });


module.exports = router;
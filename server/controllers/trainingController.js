const router = require('express').Router();
const Exercise = require('../models/Exercise');
const trainingService = require('../services/trainingService');
const authService = require("../services/AuthService");


router.get('/getWorkoutPlans', (req, res) => {
    res.status(200).json({'workoutPlans': [{0: 0}]}); // Assuming an empty array for workout plans
 });

 router.post('/createProgram', (req, res) => {
 const {day, goal, level} = req.body;
  console.log( day, goal, level )
 })
 
 router.post('/createExercise', async (req, res) => {
   const {exersiceName, urlVideo} = req.body;


    try {
        await Exercise.create({name: exersiceName, url: urlVideo});
        res.status(200).json({message: 'SUCCESSFULY'});
    } catch (error) {
     res.status(422).json({message: 'Unsuccessfuly'})
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
const router = require('express').Router();
const Exercise = require('../models/Exercise');
const authService = require("../services/AuthService");
const Workout = require("../models/Workout");
const mongoose = require('mongoose');


router.get('/getWorkoutGoalPrograms', async (req, res) => {
  try {
    const userGoal = req.query.goal; 
    const programs = await getWorkoutGoal(userGoal);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function getWorkoutGoal(userGoal) {
  try {
    const programs = await Workout.find({ goal: userGoal });

    const programArrays = programs.map(program => program.program);

    const programObjects = programArrays.flat();

    return programObjects;
    
  } catch (error) {
    throw error;
  }
}

router.post('/createExercise', async (req, res) => {
  const { exersiceName, urlVideo } = req.body;


  try {
    await Exercise.create({ name: exersiceName, url: urlVideo });
    res.status(200).json({ message: 'SUCCESSFULY' });
  } catch (error) {
    res.status(422).json({ message: 'Unsuccessfuly' })
  }
});

router.get('/getProfile', async (req, res) => {
  const user = req.body;
  try {
    const foundedUser = await authService.getProfile(user);
    res.status(200).json({ user: foundedUser });
  } catch (err) {
    res.status(404).json({ message: 'User not found' })
  }
})

router.post('/createProgram', async (req, res) => {
  try {
    const { goal, level, exercises } = req.body;

    const createdWorkout = await Workout.create({ goal: goal, level: level, program: exercises });
    console.log(createdWorkout)

    res.status(200);

  } catch (err) {
    res.status(404).json({ message: 'try again you doing well!' })
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
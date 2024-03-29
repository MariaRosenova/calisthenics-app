const router = require('express').Router();
const ownerService = require('../services/ownerService');


router.post('/createExercise', async (req, res) => {

    const exercise = req.body;
    try{

        const createdExercise = await ownerService.addExercise(exercise);
        console.log('Successfuly added a new exercise to DB', createdExercise);
    } catch(err) {

        console.log(err);
    }

});

router.post('/createWorkout', async (req, res) => {
    const workout = req.body;

    try {
        const createdWorkout = await ownerService.createWorkout(workout);
        console.log('Successfuly created a workout', createdWorkout);
    } catch(err) {
        console.log(err);
    }
});


module.exports = router;
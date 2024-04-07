// const Exersice = require('../models/Exercise');
// const Workout = require('../models/Workout');


exports.addExercise = async (exercise) => {
    const createdExercise = await Exersice.create({exerxise: exercise});

    return createdExersice;
}


exports.createWorkout = async (workout) => {
    const createdWorkout = await Workout.create({workout : workout});
    return createdWorkout;
}

const Workout = require("../models/Workout");


exports.getWorkoutGoal  = async (userGoal) => {
    try {
      const programs = await Workout.find({ goal: userGoal });
  
      // Extract and flatten the program arrays
      const programObjects = programs.flatMap(program => program.program);
  
      // Group exercises by day
      const groupedExercises = programObjects.reduce((acc, exercise) => {
        const day = exercise.day;
  
        if (!acc[day]) {
          acc[day] = [];
        }
  
        acc[day].push(exercise);
  
        return acc;
      }, {});
  
      // Convert grouped exercises object to an array of objects
      const result = Object.entries(groupedExercises).map(([day, exercises]) => ({
        day,
        exercises
      }));
  
      return result;

    } catch (error) {
      throw error;
    }
  }
  

  exports.getWorkout = async (workoutId) => {
    const workout = await Workout.findById({workoutId});

    // Extract and flatten the program arrays
    const programObjects = programs.flatMap(program => program.program);

    // Group exercises by day
    const groupedExercises = programObjects.reduce((acc, exercise) => {
      const day = exercise.day;

      if (!acc[day]) {
        acc[day] = [];
      }

      acc[day].push(exercise);

      return acc;
    }, {});

    // Convert grouped exercises object to an array of objects
    const result = Object.entries(groupedExercises).map(([day, exercises]) => ({
      day,
      exercises
    }));
    return result;
  }
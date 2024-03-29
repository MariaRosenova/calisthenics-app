const mongoose = require('mongoose');

const workoutSchema = new Schema({
   name: {
    type: String,
    required: true,
   },
   days: [{
    dayOfWeek: String,
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exersice'
    }]
   }] 
});

const Workout = mongoose.model('Workout', workoutSchema);
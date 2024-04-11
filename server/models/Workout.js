const mongoose = require('mongoose');
const Program = require('./Program');

const workoutSchema = new mongoose.Schema({
   goal: String,
   level: String,
   program:[Program.schema]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;


//   // program: [mongoose.Schema.Types.Mixed]
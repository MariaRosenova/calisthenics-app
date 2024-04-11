const mongoose = require('mongoose');


const programSchema = new mongoose.Schema({
   day: String,
   exerciseName: String,
   reps: Number,
   sets: Number,
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
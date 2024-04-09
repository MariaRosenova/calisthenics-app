const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: String,
    sets: Number,
    reps: Number,
    url: String
});
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
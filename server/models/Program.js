const mongoose = require('mongoose');
const Exercise = require('./Exercise'); // Импортирайте модела на упражнението

const programSchema = new mongoose.Schema({
    goal: String,
    level: String,
    exercises: [{
         type: mongoose.Types.ObjectId,
         ref: 'Exercise' // Свържете референцията към модела на упражнението
    }]
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
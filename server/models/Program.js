const mongoose = require('mongoose');
const Exercise = require('./Exercise'); // Импортирайте модела на упражнението

const programSchema = new mongoose.Schema({
    day: Number,
    exerciseName: [{
        type: mongoose.Types.ObjectId,
        ref: 'Exercise'
   }],
    goal: String,
    level: String,
    
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
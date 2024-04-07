const mongoose = require('mongoose');

const exerciseSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    exersice: {
        type: String,
        required: true,
    }
    
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
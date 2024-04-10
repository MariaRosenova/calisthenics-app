const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: String,
    url: String
});
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
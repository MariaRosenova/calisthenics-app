const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true,
        minlength: [10, 'The email should be at least 10 characters long'],
    },
    username: {
        type: String,
        required: [true, 'The username is required'],
        minlength: [2, 'The username should be at least 2 characters long'],
    },
    password: {
        type: String,
        required: [true, 'The password is required'],
        minlength: [4, 'The password should be at least 4 characters long'],
    },
    rePassword: {
        type: String,
        required: true,
        minlength: 4,
    }
});


userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        if (this.password !== this.rePassword) {
            throw new Error('Passwords do not match');
        }
        const hash = await bcrypt.hash(this.password, 12);
        this.password = hash;
        this.rePassword = hash; // Assigning the same hash to rePassword
    }
    next();
});
 
const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('../database')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    age: {
        type: Number,
        require: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
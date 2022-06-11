const mongoose = require('../database')

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    day: {
        type: String,
        enum: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
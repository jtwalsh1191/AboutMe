const mongoose = require('mongoose');
const Schema = mongoose.Schema


//schema consisting of all the columns in the original csv file that was imported into Mongodb atlas
const GradesSchema = new Schema({

    CourseName: {
        type: String,
        required: true
    },
    
    Number: {
        type: Number,
        required: true
    },

    Level: {
        type: Number,
        required: true
    },

    Grade: {
        type: Number,
        required: true
    },

    SubjectArea: {
        type: String,
        required: true
    },
}, {timestamps: false }); //timestamps aren't needed for our usecase

const Grades = mongoose.model('Grades', GradesSchema)

//Our Crash module exported to be accessed elsewhere
module.exports = Grades;
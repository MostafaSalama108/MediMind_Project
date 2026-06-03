const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({

    patientId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required:true 
    },


    breakfastTime: String,

    lunchTime: String,

    dinnerTime: String

}, {timestamps: true} );
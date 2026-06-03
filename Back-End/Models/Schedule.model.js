const mongoose = require("mongoose")

const medicationScheduleSchema = new mongoose.Schema({

    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },



    medicationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medication',
        required: true
    },


    scheduledTime:{
        type: Date,
        required:true
    },

    
    isTaken:{
        type: Boolean,
        default: false
    },



    takenAt:{
        type:Date,
        default: null
    },


    dosageLabel:{
        type: String,
        required: true
    }




}, {timestamps: true} )





module.exports = mongoose.model('MedicationSchedule', medicationScheduleSchema);
const mongoose = require("mongoose")

const medicationSchema = new mongoose.Schema({

    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true 
    },

    name: {
        type: String,
        required: true,
        trim: true
    },


    dosage: {
        type: String,
        required: true
    },


    frequency: {
        type: String,
        enum: ['daily' , 'weekly' , 'monthly'],
        required: true
    },

    mealRelation: {
        type: String,
        enum: ['before' , 'with' , 'after'],
        required: true
    },


    timesPerDay: {
        type:Number,
        default: 1
    },

    startDate: {
        type: Date,
        required: true
    },
    

    endDate: {
        type: Date,
        required: true
    },


    boxImage: {
        type: String,
        default: null
    },

    taypeImage: {
        type: String,
        default: null
    }
    
    



}, {timestamps: true} )


module.exports = mongoose.model('Medication', medicationSchema);
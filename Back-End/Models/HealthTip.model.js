const mongoose = require("mongoose");


const healthTipSchema = new mongoose.Schema({

    disease: {
        type: String,
        required:true},

        doList: [String],
        
        dontList: [String]


}, {timestamps: true})
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name:
    {type:String , required:true , trim: true,},


    email:
    {type:String , required:true , unique:true},


    password:
    {type:String , required:true},


    role:
    {type:String , enum: ['patient' , 'caregiver'] , default:'patient'},


    phoneNumber:
    { type:String},


    patientDetails:{


        age: Number,
        diseases:[String]
    }


},

{timestamps:true});






const User = mongoose.model("User", userSchema);

module.exports = User;
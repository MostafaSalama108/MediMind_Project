const joi = require("joi")


// Rigister 

const RegisterSchema = joi.object({

    name: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password:joi.string().min(6).required(),
    role:joi.string().valid("patient" , "caregiver").default("patient"),
    phoneNumber:joi.string(),

    patientDetails: joi.object({
        age: joi.number().integer().min(0).max(120),
        diseases: joi.array().items(joi.string())
    }).when('role', {
        is: 'patient',
        then: joi.required(),
        otherwise: joi.optional()
    })
});



// Login

const LoginSchema = joi.object({

     email: joi.string().email().required(),
    password:joi.string().min(6).required(),
})

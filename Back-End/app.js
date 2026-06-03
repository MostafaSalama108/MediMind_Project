const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = process.env.PORT || 3000

require("dotenv").config()
app.use(express.json())

async function dbConnection(){
    try{
        await mongoose.connect(process.env.URL_DB)
        console.log("DB IS DONE");
    }

    catch(error){
        console.log(error);
    }
}

dbConnection()

//**************************************************************************************************************************** */


























//**************************************************************************************************************************** */
app.listen(port , ()=>{
    console.log(`Server is Running At port ${port}`);
    
})





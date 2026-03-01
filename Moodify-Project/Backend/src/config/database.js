const mongoose = require("mongoose")


function connectedToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch(err=>{
        console.log("Error to Connecting DB", err)
    })
}



module.exports = connectedToDb
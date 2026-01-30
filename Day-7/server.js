// server ko start krna 
// database se connect krna

const app = require("./src/app")
const mongoose = require("mongoose")
const connectToDb = require("./src/config/database")
require("dotenv").config()
connectToDb();
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
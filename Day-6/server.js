/*
   -server ko start krna
   -database se connect krna
*/
const app = require('./src/app');
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://vikas:D793biPiL7AZDqKA@cluster0.kgldccy.mongodb.net/Day-6")
    .then(()=>{
        console.log("Connected to Database")
    })
}
connectToDb();

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})
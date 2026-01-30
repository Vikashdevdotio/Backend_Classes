// server ko create krna

const express = require("express")
const noteModel = require("./models/notes.model")
const app = express()
app.use(express.json())
// POST/notes
app.post("/notes",async(req,res)=>{
    const{title,description} = req.body
   const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message:"Note created Successfully",
        note
    })

    
})
// GET/notes
app.get("/notes",async (req,res) =>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:"Notes Fetch Successfully",
        notes
    })
})

module.exports = app;
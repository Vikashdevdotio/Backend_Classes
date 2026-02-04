// server ko create krna


const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const path = require('path')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("./public"))

// POST/application/notes
// create new note and save data in mongodb
// req.body = {title, description}
app.post('/api/notes', async(req,res)=>{
    const {title,description} = req.body

    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message:"Note created successfully",
        note
    })
})


// GET/api/notes
// Fetch all the notes data from mongodb and send them in the response
app.get('/api/notes', async(req,res)=>{
     const notes = await noteModel.find() 
     res.status(200).json({
        message:"Notes fetch successsfully",
        notes
     })
})


/*DELETE/api/notes/:Id
delete not with id from req.params*/
app.delete("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Notes deleted successfully"
    })
})

// PATCH/api/notes/:id
// update the description of the note
// req.body = {description}

app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id, {description})
    res.status(200).json({
        message:"Note updated successfully.",

    })
})


module.exports = app
/*
-server create krna
-server ko config krna
*/

const express = require("express")
const app = express()

const notes = []

app.use(express.json())
// POST NOTES
app.post("/notes", (req, res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
})

// GET NOTES
app.get("/notes", (req, res)=>{
    res.send(notes)
})

// DELETE NOTES
// params
//delete/notes/3   3 is index number
app.delete("/notes/:index", (req,res)=>{
    delete notes[req.params.index]
    res.send("note deleted successfully")
})

//PATCH /notes/:index
//req.body = {description : -"sample modified description."}

app.patch("/notes/:index", (req,res) =>{
    notes[req.params.index].description = req.body.description
    res.send("Noted updated successfully")
})

module.exports = app
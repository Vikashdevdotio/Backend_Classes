const express = require("express")

const app = express() // server instance create krna

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get("/about", function (req, res) {
    res.send("This is about page")
})

app.get("/home", (req, res) => {
    res.send("This is Home page")
})

app.listen(3000) // server start krna
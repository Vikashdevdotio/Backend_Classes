require("dotenv").config()
const app = require("./src/app")
const connectedToDb = require("./src/config/database")

connectedToDb();

app.listen(3000,()=>{
    console.log("Server is running on port 3000.")
})


const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "User name already exists"],
        require: [true, "User name is required"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        require: [true, "Email is required"]
    },
    password: {
        type: String,
        require: [true, "User name is required"]
    },
    bio:String,
    profileImage: {
        type: String,
        default:"https://ik.imagekit.io/Vikas16/Default_Profile_Image.avif"
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
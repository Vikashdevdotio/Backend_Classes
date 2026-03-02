const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cookieParser())

const allowedOrigins = [
    "https://instaclone-gmpf.onrender.com", // Your production frontend
    "http://localhost:5173",               // Your local development (Vite)
    "http://localhost:3000"                // Your local development (React/Node)
];
app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1) {
            return callback(new Error('CORS policy does not allow this origin'), false);
        }
        return callback(null, true);
    }
}));
app.use(express.static("./public"))

/**
 * require routes
 */
const authRouter = require('./routes/auth.routes')
const postRouter = require("./routes/post.routes")
const userRouter = require("./routes/user.routes")
/**
 * using routes
 */
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/users", userRouter)


module.exports = app
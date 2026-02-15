const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage: multer.memoryStorage()})



// POST /api/posts/    [protected]
postRouter.post("/",upload.single("image"),postController.createPostController)

// GET /api/posts/  
postRouter.get("/", postController.getPostController)

//GET /api/posts/details/:postid
//return an detail about specific post with the id. also check whether the post belongs to the user that the request come from.
postRouter.get("/details/:postId", postController.getPostDetailController)

module.exports = postRouter
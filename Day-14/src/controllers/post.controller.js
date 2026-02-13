const postModel = require("../models/post.model")
const ImageKit = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")


const imagekit = new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req,res){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"Token not provided, Unauthorized access"
        })
    }

     let decoded = null
     try{
         decoded = jwt.verify(token,process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
             message:"User not Authorized"
        })
    }

    const file = await imagekit.files.upload({
        file: await ImageKit.toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test" ,
        folder: "Cohort-2-insta-clone-posts"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    })

    res.status(201).json({
        message:"Post created successfully",
        post
    })
}



module.exports ={
    createPostController
}
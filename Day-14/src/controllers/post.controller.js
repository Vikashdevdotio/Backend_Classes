const postModel = require("../models/post.model")
const ImageKit = require("@imagekit/nodejs")



const imagekit = new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req,res){
    const file = await imagekit.files.upload({
        file: await ImageKit.toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test" 
    })

    res.send(file)
}



module.exports ={
    createPostController
}
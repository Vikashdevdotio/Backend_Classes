const express = require("express")
const userController = require("../controllers/user.controller")
const identifyUser = require("../middlewares/auth.middleware")
const userRouter = express.Router()

/**
 * @route POST /api/users/follow/:username
 * @description Follow a user According to Status 
 * @access Private
 */
userRouter.post("/follow/:username",identifyUser,userController.followUserController)

/**
 * @route PATCH /api/users/follow/status/:username
 * @description Update the Status of the Followee
 * @access Private
 */
userRouter.patch("/follow/status/:username",identifyUser,userController.updateFollowStatusController)

/**
 * @route POST /api/users/unfollow/:username
 * @description Unfollow a user
 * @access Private
 */
userRouter.post("/unfollow/:username",identifyUser,userController.unfollowUserController)



module.exports = userRouter
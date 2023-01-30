const { Comment } = require("../models/comment.model")
const { Post } = require("../models/post.model")

const addComment = async (req,res)=>{
    const {comment,name,picture} = req.body
    const {post_id} = req.headers
    const commentt = new Comment({post_id,name,picture,comment})
    await commentt.save()
    res.send("Success")
}

const getComments = async (req,res)=>{
    const {post_id} = req.headers
    const comments = await Comment.find({post_id})
    res.send(comments)
}

module.exports = {addComment , getComments}
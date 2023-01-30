const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    post_id : {type: String, required: true},
    name: {type: String, required: true},
    picture: {type: String, required: true},
    comment: {type: String, required: true}
})
const Comment = mongoose.model("postcomment", commentSchema)

module.exports = {Comment}
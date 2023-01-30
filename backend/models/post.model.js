const {default: mongoose} =require("mongoose");

const postSchema = mongoose.Schema({
    name: {type: String , required: true},
    picture: {type: String , required: true},
    title: {type: String , required: true},
    desc: {type: String , required: true},
},
{timestamps: true})
const Post = mongoose.model("fundupost" , postSchema)

module.exports = {Post}
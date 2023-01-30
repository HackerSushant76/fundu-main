const { Post } = require("../models/post.model")

const addPostControl = async(req,res)=>{
    const {name,picture,title,desc} = req.body
    const post = new Post({name,picture,title,desc})
    await post.save()
    res.send("success");
}
const getPostControl = async (req,res)=>{
    // console.log(req.query)
    const {page,sort,filter} = req.query
    const limit = 20
    if(filter!==undefined){
        const posts =await Post.find({name: filter}).sort({name: 1}).skip((page-1)*limit).limit(limit)
        res.send(posts)
        return
    };
    if(sort == "asc"){
        const posts =await Post.find().sort({name: 1}).skip((page-1)*limit).limit(limit)
        res.send(posts)
        return
    }
    else if(sort== "desc"){
        const posts =await Post.find().sort({name: -1}).skip((page-1)*limit).limit(limit)
        res.send(posts)
        return
    }
    const posts =await Post.find().skip((page-1)*limit).limit(limit)
    res.send(posts);
}

module.exports = {addPostControl,getPostControl}
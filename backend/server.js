const express = require("express")
const { connection } = require("./config/db")
const { addPostControl, getPostControl } = require("./controllers/post.controller")
require("dotenv").config()
const cors = require("cors")
const { addComment, getComments } = require("./controllers/comment.controller")
const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("welcome to fundu api")
});

app.post("/addpost" , addPostControl)
app.get("/posts" , getPostControl)

app.post("/addcomment" , addComment)
app.get("/comments" , getComments)

app.listen(PORT , async()=>{
    try{
        await connection
        console.log("Connected to db succesfully")
    }
    catch(err){
        console.log(err)
    }
    console.log(`listening at port -- ${PORT}`)
})
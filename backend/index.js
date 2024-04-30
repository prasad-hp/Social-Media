import express from "express"
import userPosts from "./data.js";
const app = express()

const port = 3000;

app.get("/", (req, res)=>{
    res.json(userPosts)
})

app.listen(port)
console.log("port running successfully at" + port)
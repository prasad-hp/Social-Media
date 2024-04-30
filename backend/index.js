import express from "express"
const app = express()

const port = 3000;

app.get("/", (req, res)=>{
    res.json("hello")
})

app.listen(port)
console.log("port running successfully at" + port)
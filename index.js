const express = require("express")

const app = new express()

app.get("*",(req,res)=>{
    res.sendFile(__dirname+'/app'+req.url)
})

app.listen(3000,()=>{
    console.log("hosting on port 3000")
})
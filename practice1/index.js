var express = require("express")
var app = express()
app.get("/about",function(req,res){
    res.send("Our express app is start")
})

app.listen(8000,function(){
    console.log("Server is running")
})
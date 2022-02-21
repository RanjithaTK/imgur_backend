const express= require("express")  
 const mongoose = require("mongoose")
 mongoose.connect("mongodb+srv://RANJITHATK:RANJITHATK@cluster0.irwxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("database connected")
}).catch((err)=>{console.log(err)})
const app=express()
const PORT=process.env.PORT || 3000
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/ranji",(req,res)=>{
    res.send("hello ranjimol")
})
app.listen(PORT,()=>{
    console.log("listening to port 3000")
})
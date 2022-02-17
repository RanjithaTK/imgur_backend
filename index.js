const express= require("express")   
const app=express()
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/ranji",(req,res)=>{
    res.send("hello ranjimol")
})
app.listen(3000,()=>{
    console.log("listening to port 3000")
})
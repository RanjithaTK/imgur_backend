const express= require("express")   
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
const express=require('express');
const cors=require('cors');
const fs=require('fs').promises;
const app=express();
const port=3002;
app.use(express.json()); // middleware
app.use(cors()); //allow cross origing request
app.post('/login',(req,res)=>{
    try{
        console.log("Hello")
    const {name,email} =req.body;
    console.log(name+email);
res.send("<h2>Welcome to express server</h2>");
res.status(200).json({msg:"Successfully login"});
    }catch(err){
        res.status(500).json({msg:err});
    }
})

app.post('/register',(req,res)=>{
   // res.send("<h2>Welcome to express server post method</h2>");
   res.status(200).json({msg:"Successfully registered"});
})

app.listen(port,()=>{
    console.log("Express server is running on::"+port)
})
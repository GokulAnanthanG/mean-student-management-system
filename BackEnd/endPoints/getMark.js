const express=require("express");
const route=express.Router();
const mongodb=require("mongodb").MongoClient;
require('dotenv/config') 
 route.post("/",(req,res)=>{
     mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
         if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
     else{
var dbName=con.db("msystem");
console.log(req.body)



  dbName.collection("mark").find({regNo:String(req.body.regNo)}).toArray((err,info)=>{
      if(err){console.log("failed to fetch Mark");      res.json({message:"Failed To Get Mark"});console.log("faile to fetch")}
    else{
        res.json({message:"Mark find",data:info})
        console.log(info)
    }
  })
 
    }//esle
        })
  })


 module.exports=route
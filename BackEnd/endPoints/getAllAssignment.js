const express=require("express");
const route=express.Router();
const mongodb=require("mongodb").MongoClient;
require('dotenv/config') 
 route.get("/",(req,res)=>{
     mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
         if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
     else{
var dbName=con.db("msystem");
 



  dbName.collection("assignment").find({}).toArray((err,info)=>{
      if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
    else{
        res.json({message:"assigments find",data:info})
        console.log(info)
    }
  })
 
    }//esle
        })
  })


 module.exports=route
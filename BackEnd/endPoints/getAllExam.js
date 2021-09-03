const express=require("express");
const route=express.Router();
const mongodb=require("mongodb").MongoClient;
require('dotenv/config') 
 route.get("/",(req,res)=>{
     mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
         if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
     else{
var dbName=con.db("msystem");
 



  dbName.collection("exam").find({}).toArray((err,info)=>{
      if(err){console.log("failed to fetch Exams");      res.json({message:"Failed To Get exams"});console.log("faile to fetch")}
    else{
        res.json({message:"Exams find",data:info})
        console.log(info)
    }
  })
 
    }//esle
        })
  })


 module.exports=route
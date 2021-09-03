const express=require("express");
const route=express.Router();
const mongodb=require("mongodb").MongoClient;
require('dotenv/config') 
 route.get("/",(req,res)=>{
     mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
         if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
     else{
var dbName=con.db("msystem");
console.log(req.body)
dbName.collection("student").find({}).toArray((err,info)=>{
    if(err){
                res.json({message:"Failed To Find"});console.log("faile to insert")}
        else{
           res.json({message:"Student find",data:info})
           console.log(info)
       }
})
     }//esle
        })
  })


 module.exports=route
const express=require("express");
const route=express.Router();
const mongodb=require("mongodb").MongoClient;
const  OBJ=require("mongodb").ObjectID;
require('dotenv/config') 
 route.post("/",(req,res)=>{
     mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
         if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
     else{
var dbName=con.db("msystem");
 
var data=req.body.mark;
var update ={$set:{mark:data}}
 dbName.collection("mark").updateOne({'_id':OBJ(req.body.id)},update,(err,info)=>{
    if(err){
        res.json({message:"Failed To update"});console.log("faile to update")}
else{
    res.json({message:"mark updated",data:info})
    console.log(info)
}
    })
    }//esle
        })
  })


 module.exports=route
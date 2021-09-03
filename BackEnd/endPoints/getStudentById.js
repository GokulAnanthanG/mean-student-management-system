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
console.log(req.body)
 dbName.collection("student").findOne({'_id':OBJ(req.body.id)},(err,info)=>{
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
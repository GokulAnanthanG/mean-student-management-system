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

 var update ={$set:{sem1fees:req.body.fees1,sem2fees:req.body.fees2,sem3fees:req.body.fees3,sem4fees:req.body.fees4,sem5fees:req.body.fees5,sem6fees:req.body.fees6,feesEnteryUpdatedDay:req.body.date}}
 dbName.collection("student").updateOne({'_id':OBJ(req.body.id)},update,(err,info)=>{
    if(err){
        res.json({message:"Failed To update"});console.log("faile to update")}
else{
    res.json({message:"Fees updated",data:info})
    console.log(info)
}
    })
    }//esle
        })
  })


 module.exports=route
const express=require("express");
const route=express.Router();
const mongodb=require("mongodb").MongoClient;
require('dotenv/config') 
var male;
var female	
 
  route.get("/",(req,res)=>{
   
     mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
         if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
     else{
var dbName=con.db("msystem"); 
 dbName.collection("student").find({gender:'Male'}).toArray((err,info)=>{
      if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
    else{
        
       male=info.length
       console.log(male)
    }
  })
 
    }//esle
        })


        mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
            if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
        else{
   var dbName=con.db("msystem"); 
    dbName.collection("student").find({gender:'Female'}).toArray((err,info)=>{
         if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
       else{
           
        female=info.length
          console.log(female)
       }
     })
    
       }//esle
 

     
    res.json([
    {gender:'Male',s:male,text:`${male}`},
    {gender:'Female',s:female,text:`${female}`},
     
     
])
       
           })//db con



  })//route

 module.exports=route
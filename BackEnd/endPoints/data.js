const express=require("express");
const route=express.Router();
const mongodb=require("mongodb").MongoClient;
require('dotenv/config') 
var BCA;
var BBA
var BscI
var BscM
var bCom
 route.get("/",(req,res)=>{
   
     mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
         if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
     else{
var dbName=con.db("msystem"); 
 dbName.collection("student").find({department:'BCA'}).toArray((err,info)=>{
      if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
    else{
        
       bca=info.length
       console.log(bca)
    }
  })
 
    }//esle
        })


        mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
            if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
        else{
   var dbName=con.db("msystem"); 
    dbName.collection("student").find({department:'BCA'}).toArray((err,info)=>{
         if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
       else{
           
          BCA=info.length
          console.log(BCA)
       }
     })
    
       }//esle

       if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
       else{
  var dbName=con.db("msystem"); 
   dbName.collection("student").find({department:'BBA'}).toArray((err,info)=>{
        if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
      else{
          
         BBA=info.length
         console.log(BBA)
      }
    })
   
      }//esle



      if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
      else{
 var dbName=con.db("msystem"); 
  dbName.collection("student").find({department:'BSC(IT)'}).toArray((err,info)=>{
       if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
     else{
         
        BscI=info.length
        console.log(BscI)
     }
   })
  
     }//esle



     if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
     else{
var dbName=con.db("msystem"); 
 dbName.collection("student").find({department:'BSC(Maths)'}).toArray((err,info)=>{
      if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
    else{
        
       BscM=info.length
       console.log(BscM)
    }
  })
 
    }//esle


    if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
    else{
var dbName=con.db("msystem"); 
dbName.collection("student").find({department:'B.Com'}).toArray((err,info)=>{
     if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
   else{
       
      bCom=info.length
      console.log(bCom)
   }
 })

   }//esle
console.log("..",BCA)
   res.json([
    {department:'BCA',s:BCA},
    {department:'BBA',s:BBA},
    {department:'Bsc(Maths)',s:BscM},
    {department:'Bsc(IT)',s:BscI},
    {department:'B.Com',s:bCom},
    
])
       
           })//db con



  })//route

 module.exports=route
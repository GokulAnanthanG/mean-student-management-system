const express=require("express");
const route=express.Router();
const mongodb=require("mongodb").MongoClient;
require('dotenv/config') 
var 
Teaching_Staff;
var Office_Staff	
var Non_Teaching_Staff
var Lab_Assistance
  route.get("/",(req,res)=>{
   
     mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
         if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
     else{
var dbName=con.db("msystem"); 
 dbName.collection("staff").find({position:'Teaching Staff'}).toArray((err,info)=>{
      if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
    else{
        
       Teaching_Staff=info.length
       console.log(Teaching_Staff)
    }
  })
 
    }//esle
        })


        mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
            if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
        else{
   var dbName=con.db("msystem"); 
    dbName.collection("staff").find({position:'Non-Teaching'}).toArray((err,info)=>{
         if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
       else{
           
        Non_Teaching_Staff=info.length
          console.log(Non_Teaching_Staff)
       }
     })
    
       }//esle

       if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
       else{
  var dbName=con.db("msystem"); 
   dbName.collection("staff").find({position:'Office Staff'}).toArray((err,info)=>{
        if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
      else{
          
         Office_Staff=info.length
         console.log(Office_Staff)
      }
    })
   
      }//esle



      if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
      else{
 var dbName=con.db("msystem"); 
  dbName.collection("staff").find({position:'Lab-Assitance'}).toArray((err,info)=>{
       if(err){console.log("failed to fetch assigments");      res.json({message:"Failed To Get assigments"});console.log("faile to fetch")}
     else{
         
        Lab_Assistance=info.length
        console.log(Lab_Assistance)
     }
   })
  
     }//esle



     
    res.json([
    {position:'Teaching Staff',s:Teaching_Staff,text:`${Teaching_Staff} `},
    {position:'Non-Teaching Staff',s:Non_Teaching_Staff,text:`${Non_Teaching_Staff} `},
    {position:'Office Staff',s:Office_Staff,text:`${Office_Staff} `},
    {position:'Lab-Assistance',s:Lab_Assistance,text:`${Lab_Assistance} `},
     
])
       
           })//db con



  })//route

 module.exports=route
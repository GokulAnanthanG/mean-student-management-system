const express=require('express');
const route=express.Router();
const mongoDb=require('mongodb').MongoClient
//
require('dotenv/config')
const token=require('../helpers/studentTokenAction')
 

route.post('/',(req,res)=>{
    console.log(req.body)
    mongoDb.connect(process.env.DBURL,{useUnifiedTopology:true},async(err,con)=>{
        if(err){res.json({message:"Failed to connect"});console.log("Failed to connect")}
  else{
       var dbName=con.db("msystem");
       dbName.collection('student').findOne({regNo:String(req.body.regNo),password:String(req.body.pass)},async(err,info)=>{
           
    if(err){console.log("failed to find")}
    
    else{
        console.log(info)
if(info){
    console.log('find')
  var tok= await  token.genToken(info.email,info.name,info.department)
    res.json({message:'find',data:info,token:tok})
}
else{
    console.log("no data")
    res.json({message:'invalid'})
}
    }
       
       })//findone   
    }//inner else
        
     
    })
})


module.exports=route
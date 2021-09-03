const express=require("express");
const route=express.Router();
const mongodb=require("mongodb").MongoClient;
const  OBJ=require("mongodb").ObjectID;
require('dotenv/config') 
//
const bcrypt=require("../helpers/bcrypt");
 route.post("/",async(req,res)=>{

    mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,(err,con)=>{
        if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
    else{
var dbName=con.db("msystem");
console.log(req.body)
dbName.collection("admin").findOne({email:String(req.body.name)},async(err,info)=>{
   if(err){
       res.json({message:"Failed To Find"});console.log("faile to insert")}
else{
    console.log(info)
    
    ///
if(info==null){

    console.log("no email ")
    res.json({message:"Failed To Updated",data:info})

      
   ////
}//null checker
else{

    var resultT=await bcrypt.validator(req.body.pass,info.pass)
    console.log( resultT)
       if(resultT){
        mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,async(err,con)=>{
            if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
        else{
   var dbName=con.db("msystem");
    var hashPass= await bcrypt.generatre(req.body.newPass)
     var update ={$set:{pass:hashPass}}
    dbName.collection("admin").updateOne({email:req.body.name,secretKey:req.body.sKey},update,(err,info)=>{
       if(err){
           res.json({message:"Failed To update"});console.log("faile to update")}
   else{
       res.json({message:"Changes updated",data:info})
       console.log(info.modifiedCount)
   }
       })
       } //esle
        })
     }//result t
     else{     
        res.json({message:"Failed To update"});console.log("faile to update")

     }
 
 

}//null checker else
}
   })
   }//esle
       })

    
//      var resultT=await bcrypt.validator('1122','$2a$08$NGLsOl/db0K/wE6pU4kmHOWICFa0m9Gc2cr61Yt3U8ycuN5.bemmi')
//  console.log( resultT)
//      console.log(req.body)
//      mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true } ,async(err,con)=>{
//          if(err){res.json({message:'Failed to connect'});console.log("Failed to connect")}
//      else{
// var dbName=con.db("msystem");
//  var hashPass= await bcrypt.generatre(req.body.newPass)
//   var update ={$set:{pass:hashPass}}
//  dbName.collection("admin").updateOne({name:req.body.name,pass:req.body.pass,secretKey:req.body.sKey},update,(err,info)=>{
//     if(err){
//         res.json({message:"Failed To update"});console.log("faile to update")}
// else{
//     res.json({message:"Fees updated",data:info})
//     console.log(info.modifiedCount)
// }
//     })
//     }//esle
//         })
  })


 module.exports=route
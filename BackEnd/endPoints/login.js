const express=require('express');
const route=express.Router();
const mongoDb=require('mongodb').MongoClient
//
require('dotenv/config')
const token=require('../helpers/jwt')
const bcrypt=require('../helpers/bcrypt');


route.post('/',(req,res)=>{
    mongoDb.connect(process.env.DBURL,{useUnifiedTopology:true},(err,con)=>{
        if(err){res.json({message:"Failed to connect"});console.log("Failed to connect")}
  else{
       var dbName=con.db("msystem");
       dbName.collection('admin').findOne({email:String(req.body.userName)},async(err,info)=>{
           if(err){res.json({message:"Invalid"});console.log("no user. invalid")}
      else{
        if(info==null){
          res.json({message:"Invalid"});console.log("no user. invalid")
   
  }//nullchecker
  else{
    var result=await bcrypt.validator(req.body.password,info.pass);
    console.log(result)
    if(result){
     var tok=await token.genToken(info.email,info.name)
    res.json({message:"loged in",data:info,token:tok});
    }
    else{
     res.json({message:"Invalid"});console.log("no user. invalid")
    }
  }//null checker else
   
    }//inner else
        })
      }//else
    })
})


module.exports=route
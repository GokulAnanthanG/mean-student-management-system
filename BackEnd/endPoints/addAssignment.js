const express=require('express');
const route=express.Router();
const path=require("path");
const multer=require("multer");
const mongodb=require('mongodb').MongoClient;
const { json } = require('body-parser');
require('dotenv/config');
var url_path;
var storage=multer.diskStorage({
    destination:'./uploads/assignment',
    filename:( req,file,cb )=>{
        url_path=`${file.originalname}_${Date.now()}${path.extname(file.originalname)}`
        return cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({
    storage:storage
})
 route.post('/',upload.single('file'),(req,res)=>{
      var obj=JSON.parse(req.body.data);
      console.log(obj)
    mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true },(err,con)=>{
        if(err){res.json({message:"Failed to cconnect"});console.log('failed to connect')}
else{

  var dbName=con.db('msystem');
 dbName.collection('assignment').insertOne({
    title:obj.title,
    description:obj.description,
    file:` http://localhost:3000/profile/assignment/${url_path}`,
    department:obj.department,
    sem: obj.sem,
    fileName:url_path ,
    due:obj.duw  ,
    
}    ,(err,info)=>{
     if(err){res.json({message:"Failed to insert"});console.log("Failed to insert")}
else{
 res.json({message:"Assignment Added",data:info});
    console.log("Assignment inserted");
}
    })
}//else
    })
 });



 module.exports=route;
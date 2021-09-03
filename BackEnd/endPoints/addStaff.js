const express=require('express');
const route=express.Router();
const path=require("path");
const multer=require("multer");
const mongodb=require('mongodb').MongoClient;
const { json } = require('body-parser');
require('dotenv/config');
var url_path;
var storage=multer.diskStorage({
    destination:'./uploads/staff',
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
    mongodb.connect(process.env.DBURL,{ useUnifiedTopology: true },(err,con)=>{
        if(err){res.json({message:"Failed to cconnect"});console.log('failed to connect')}
else{

  var dbName=con.db('msystem');
 dbName.collection('staff').insertOne({
    name:obj.name,
    password:obj.password,
    staffImage:` http://localhost:3000/profile/staff/${url_path}`,
    gender:obj.gender,
    dob: obj.dob,
    phoneNo:obj.phoneNo,
    position:obj.Position,
     bloodGroup: obj.bloodGroup,
    email: obj.email,
    pincode: obj.pincode,
    address: obj.address,
    department: obj.department,
    city:obj.city,
     joinedYear:obj.joinedYear
}    ,(err,info)=>{
     if(err){res.json({message:"Failed to insert"});console.log("Failed to insert")}
else{
 res.json({message:"Staff Added",data:info});
    console.log("staff inserted");
}
    })
}//else
    })
 });



 module.exports=route;
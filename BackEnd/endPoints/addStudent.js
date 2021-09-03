const express = require('express');
const route = express.Router();
//
const mongoDb = require('mongodb').MongoClient
require('dotenv/config')
//
const multer = require("multer");
const path = require("path");

// storage engine 
var url_path;
const storage = multer.diskStorage({
    destination: './uploads/img',
    filename: (req, file, cb) => {
        url_path = `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`
        return cb(null, `${file.originalname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,

})
//
 
 
//
route.post('/', upload.single('file'), (req, res) => {
    var obj=JSON.parse(req.body.data);
     
    mongoDb.connect(process.env.DBURL, { useUnifiedTopology: true }, (err, con) => {
        if (err) { console.log("error in connection"); res.json({ message: "failed to connect" }) }
        else {

               var dbName=con.db("msystem");
               dbName.collection('student').insertOne( {
                  name:obj.name,
                  fatherName:obj.fatherName,
                  StudentImage:` http://localhost:3000/profile/img/${url_path}`,
                  gender:obj.gender,
                  dob: obj.dob,
                  phoneNo:obj.phoneNo,
                  fatherNo: obj.fatherNo,
                  bloodGroup: obj.bloodGroup,
                  email: obj.email,
                  pincode: obj.pincode,
                  address: obj.address,
                  department: obj.department,
                  city:obj.city,
                  regNo:obj.regNo,
                  joinedYear:obj.joinedYear,
                  password:' ',
                  position:'student',
                  sem1fees:' ',
                  sem2fees:' ',
                  sem3fees:' ',
                  sem4fees:' ',
                  sem5fees:' ',
                  sem6fees:' ',
                  feesEnteryUpdatedDay:''
              },(err,info)=>{
              if(err){res.json({message:"failed to insert"});console.log("failed to insert")}
              else{
                  res.json({message:"Student Addded",data:info});
                  console.log("data added ",info);
              }
               })
        }//else
    })


     

})


 


module.exports = route;
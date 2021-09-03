const express=require("express");
const route=express.Router();
const multer=require("multer");
const mongoDb=require("mongodb").MongoClient
const OBJ=require("mongodb").ObjectID
const path=require("path");
var url_path;
const storage=multer.diskStorage({
destination:'./uploads/img',
filename:(req,file,cb)=>{
    url_path=`${file.originalname}_${Date.now()}${path.extname(file.originalname)}`
return cb(null,`${file.originalname}_${Date.now()}${path.extname(file.originalname)}`)
}
})
const upload=multer({
    storage:storage
})
route.post('/', upload.single('file'), (req, res) => {
 var ValidUrl;

    var obj=JSON.parse(req.body.data);
    if(req.file==undefined){
       ValidUrl=  obj.oldSource
    }else{
        ValidUrl=` http://localhost:3000/profile/img/${url_path}`
    }
        console.log( obj)

    mongoDb.connect(process.env.DBURL, { useUnifiedTopology: true }, (err, con) => {
        if (err) { console.log("error in connection"); res.json({ message: "failed to connect" }) }
        else {
            let updateWhere={'_id':OBJ(obj.id)};
            let updateValue={$set:{
                name:obj.name,
                fatherName:obj.fatherName,
                StudentImage:ValidUrl,
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
                password:' '
            }}
               var dbName=con.db("msystem");
               dbName.collection('student').updateOne(updateWhere,updateValue ,(err,info)=>{
              if(err){res.json({message:"failed to update"});console.log("failed to update")}
              else{
                  res.json({message:"Student Updated",data:info});
                  console.log("data updated ",info);
              }
               })
        }//else
    })


     

})




module.exports = route;
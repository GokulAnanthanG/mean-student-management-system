 const express=require("express");
const route=express.Router();
const mongoDb=require("mongodb").MongoClient
const multer=require("multer");
const path=require("path");
var  url_path;
const storage=multer.diskStorage({
    destination:'./uploads/message',
    filename:(req,file,cb)=>{
        url_path=`${file.originalname}_${Date.now()}${path.extname(file.originalname)}`
        return cb(null,`${file.originalname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({
    storage:storage
})

route.post('/',upload.single('file'),(req,res)=>{
console.log(JSON.parse(req.body.data));


mongoDb.connect(process.env.DBURL, { useUnifiedTopology: true }, (err, con) => {
    if (err) { console.log("error in connection"); res.json({ message: "failed to connect" }) }
    else {
            var dbName=con.db("msystem");

            var obj={
                message:JSON.parse(req.body.data),
                postImage:` http://localhost:3000/profile/message/${url_path}`,
            }
           dbName.collection('message').insertOne(obj,(err,info)=>{
          if(err){res.json({message:"failed to insert"});console.log("failed to insert")}
          else{
              res.json({message:"Message Addded",data:info});
              console.log("message added ",info);
          }
           })
    }//else
})

})


module.exports=route;
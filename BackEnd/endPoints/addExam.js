const express = require('express');
const route = express.Router();
//
const mongoDb = require('mongodb').MongoClient
require('dotenv/config')
route.post('/',  (req, res) => {
      
    mongoDb.connect(process.env.DBURL, { useUnifiedTopology: true }, (err, con) => {
        if (err) { console.log("error in connection"); res.json({ message: "failed to connect" }) }
        else {
                var dbName=con.db("msystem");
               dbName.collection('exam').insertOne(req.body,(err,info)=>{
              if(err){res.json({message:"failed to insert"});console.log("failed to insert")}
              else{
                  res.json({message:"Exam Addded",data:info});
                  console.log("Exam added ",info);
              }
               })
        }//else
    })


     

})


 


module.exports = route;
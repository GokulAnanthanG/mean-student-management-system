const express=require('express');
const route=express.Router();
//
const jwt=require('../helpers/studentTokenAction');
route.post('/',async(req,res)=>{
    var token=req.body.token
    console.log(req.body);
var result=await jwt.tokenValidator(token)
if(result.status){
    res.json({status:result.status,data:result.data})
}
else{
    res.json({status:result.status,data:result.data})
}
})

module.exports=route;
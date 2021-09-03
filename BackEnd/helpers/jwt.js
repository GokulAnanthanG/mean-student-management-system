 const jwt=require('jsonwebtoken');
require('dotenv/config')

const tokenGenerator=(email,name)=>{
var token=jwt.sign({email,name},process.env.sKey)
return token;
}

const tokenValidator=async(token)=>{
    try{
const result=await jwt.verify(token,process.env.sKey)
return {status:true,data:result}   
}
    catch(err){
        console.log("invalid token");
        return{status:false,data:null}
    }
}


module.exports={
    genToken:tokenGenerator,
    tokenValidator:tokenValidator
}
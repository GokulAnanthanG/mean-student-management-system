const jwt=require('jsonwebtoken');
require('dotenv/config')

const tokenGenerator=(email,name,department)=>{
var token=jwt.sign({email,name,department},process.env.ssKey)
return token;
}

const tokenValidator=async(token)=>{
    try{
const result=await jwt.verify(token,process.env.ssKey)
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
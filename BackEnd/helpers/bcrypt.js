const bycrypt=require("bcryptjs");

const genHashPass=async(plainPass)=>{
    const saltCount=8;
var salt=await bycrypt.genSalt(saltCount);
try{
    var hashPass=await bycrypt.hash(plainPass,salt)
    console.log('hashP ',hashPass)
    return hashPass
}
catch(err){
console.log("error in gen pass")
}
}

const hashPassValidator=async(plainPass,hashedPass)=>{
try{
    var result=bycrypt.compare(plainPass,hashedPass);
return result
}
catch(error){
return false
}
}


module.exports={
    generatre:genHashPass,
    validator:hashPassValidator
}
const mongoose=require("mongoose");
const registerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }
    
})
const regSh=mongoose.model('register', registerSchema);
module.exports={regSh}
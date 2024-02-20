const mongoose=require("mongoose")
const dataStoreSchema=new mongoose.Schema({
    // email:{
    //     type:String,
    //     required:true
    // },
    id:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
       
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:String,
        
    },
    cat:{
        type:String,
        required:true
    },

    useremail:{
        type:String,
        required:true
    },
    
})
const dataStore=mongoose.model('usercourses', dataStoreSchema);
module.exports={dataStore}
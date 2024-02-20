const mongoose=require("mongoose");
const dataSchema=new mongoose.Schema({
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
    

})
const dataSh=mongoose.model('allData', dataSchema);
module.exports={dataSh}

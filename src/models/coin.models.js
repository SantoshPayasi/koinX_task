import mongoose from "mongoose";


const coinSchema = new mongoose.Schema({
    Type:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    marketCap:{
        type:Number,
        required:true
    },
    "24hChange":{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
},
{
 timestamps:true
})




export default mongoose.model("coinDataModel", coinSchema)
import mongoose from "mongoose";


const qrCodeSchema = new mongoose.Schema(
{
    url:{
        type:String,
        required:true
    },

    label:{
        type:String,
        required:true
    },

    uploadedAt:{
        type:Date,
        default:Date.now
    }
},
{
    timestamps:true
}
);


export default mongoose.model(
    "QrCode",
    qrCodeSchema
);
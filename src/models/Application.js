import mongoose from "mongoose";


const applicationSchema = new mongoose.Schema(
{

name:{
    type:String,
    required:true
},


email:{
    type:String,
    required:true,
    lowercase:true
},


mobile:{
    type:String,
    required:true
},


college:{
    type:String,
    required:true
},


education:{
    type:String,
    required:true
},


duration:{
    type:String,
    enum:[
        "2_months",
        "6_months"
    ],
    required:true
},


course:{
    type:String,
    required:true
},


registrationFee:{
    type:Number,
    default:500
},


paymentScreenshot:{
    type:String,
    required:true
},


status:{
    type:String,
    enum:[
        "pending",
        "approved",
        "rejected"
    ],
    default:"pending"
}


},
{
    timestamps:true
}
);



const Application =
mongoose.models.Application ||
mongoose.model("Application", applicationSchema);



export default Application;
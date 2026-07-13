import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    company:{
        type:String,
        default:""
    },

    email:{
        type:String,
        required:true,
        lowercase:true
    },

    phone:{
        type:String,
        required:true
    },

    service:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:[
            "new",
            "read",
            "replied",
            "closed"
        ],
        default:"new"
    }

},
{
    timestamps:true
});


export default mongoose.model(
    "Enquiry",
    enquirySchema
);
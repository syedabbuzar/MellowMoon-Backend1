import mongoose from "mongoose";


const successContentSchema = new mongoose.Schema(
{

title:{
    type:String,
    default:"Registration Submitted!"
},

description:{
    type:String,
    default:"Your application has been received."
},

whatsappNumber:{
    type:String,
    default:""
},

whatsappGroupLink:{
    type:String,
    default:""
},

address:{
    type:String,
    default:""
},

additionalNotes:{
    type:String,
    default:""
}

},
{
    timestamps:true
}
);


export default mongoose.model(
"SuccessContent",
successContentSchema
);
import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
{
    siteName:{
        type:String,
        default:"MellowMoon SoftTech"
    },

    adminEmail:{
        type:String,
        required:true
    },

    notifications:{
        type:Boolean,
        default:true
    },

    autoApprove:{
        type:Boolean,
        default:false
    },

    maintenanceMode:{
        type:Boolean,
        default:false
    }

},
{
    timestamps:true
}
);


export default mongoose.model(
    "Settings",
    settingsSchema
);
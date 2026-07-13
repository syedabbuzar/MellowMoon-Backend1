import Application from "../models/Application.js";


// Get All Applications

export const getAllApplicationsService = async()=>{

return await Application.find()
.sort({
createdAt:-1
});

};



// Update Status

export const updateApplicationStatusService =
async(id,status)=>{


const application =
await Application.findByIdAndUpdate(
id,
{
status
},
{
new:true
}
);


return application;

};
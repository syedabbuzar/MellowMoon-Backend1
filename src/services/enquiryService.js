import Enquiry from "../models/Enquiry.js";


// GET ALL

export const getAllEnquiriesService = async()=>{

return await Enquiry.find()
.sort({
createdAt:-1
});

};



// CREATE

export const createEnquiryService = async(data)=>{

return await Enquiry.create(data);

};



// UPDATE STATUS

export const updateEnquiryStatusService =
async(id,status)=>{

return await Enquiry.findByIdAndUpdate(
id,
{
status
},
{
new:true
}
);

};



// DELETE

export const deleteEnquiryService =
async(id)=>{

return await Enquiry.findByIdAndDelete(id);

};
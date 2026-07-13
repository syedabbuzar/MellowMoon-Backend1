 import {
getAllEnquiriesService,
createEnquiryService,
updateEnquiryStatusService,
deleteEnquiryService
}
from "../services/enquiryService.js";



// GET ALL

export const getEnquiries = async(req,res)=>{

try{

const enquiries =
await getAllEnquiriesService();


res.status(200).json({

success:true,
enquiries

});


}catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};





// CREATE ENQUIRY

export const createEnquiry = async(req,res)=>{

try{


const enquiry =
await createEnquiryService(req.body);



res.status(201).json({

success:true,
message:"Enquiry submitted",
enquiry

});


}catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};





// UPDATE STATUS

export const updateEnquiryStatus =
async(req,res)=>{

try{


const {id}=req.params;

const {status}=req.body;


const enquiry =
await updateEnquiryStatusService(
id,
status
);



if(!enquiry){

return res.status(404).json({

success:false,
message:"Enquiry not found"

});

}



res.json({

success:true,
message:"Status updated",
enquiry

});


}catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};





// DELETE

export const deleteEnquiry =
async(req,res)=>{

try{


const {id}=req.params;


await deleteEnquiryService(id);



res.json({

success:true,
message:"Enquiry deleted"

});


}catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};
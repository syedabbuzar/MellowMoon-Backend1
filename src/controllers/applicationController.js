import Application from "../models/Application.js";


// GET ALL APPLICATIONS

export const getApplications = async (req,res)=>{

try{

const applications = await Application
.find()
.sort({createdAt:-1});


res.status(200).json({

success:true,

applications: applications.map((app)=>({

id: app._id,

name: app.name,
email: app.email,
mobile: app.mobile,

college: app.college,
education: app.education,

duration: app.duration,
course: app.course,

registrationFee: app.registrationFee,

paymentScreenshot: app.paymentScreenshot,

status: app.status,

createdAt: app.createdAt,
updatedAt: app.updatedAt

}))

});


}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};




// UPDATE STATUS

export const updateApplicationStatus = async(req,res)=>{

try{


const application = await Application.findByIdAndUpdate(

req.params.id,

{
status:req.body.status
},

{
new:true
}

);



if(!application){

return res.status(404).json({

success:false,

message:"Application not found"

});

}



res.status(200).json({

success:true,

message:"Application status updated",

application

});


}
catch(error){


res.status(500).json({

success:false,

message:error.message

});


}

};
import SuccessContent from "../models/SuccessContent.js";


// GET SUCCESS CONTENT

export const getSuccessContent = async(req,res)=>{

try{


let content = await SuccessContent.findOne();


if(!content){

content = await SuccessContent.create({});

}



res.status(200).json({

success:true,
content

});


}
catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};





// UPDATE SUCCESS CONTENT


export const updateSuccessContent = async(req,res)=>{

try{


const content =
await SuccessContent.findOneAndUpdate(
{},
req.body,
{
new:true,
upsert:true
}
);



res.status(200).json({

success:true,
message:"Success content updated successfully",
content

});


}
catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};
import {
getQrCodesService,
addQrCodeService,
deleteQrCodeService
}
from "../services/qrService.js";



// GET QR LIST

export const getQrCodes = async(req,res)=>{

try{

const qrCodes =
await getQrCodesService();


res.status(200).json({

success:true,
qrCodes

});


}
catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};




// ADD QR

export const addQrCode = async(req,res)=>{


try{


const qrCode =
await addQrCodeService({

url:req.body.url,

label:req.body.label

});



res.status(201).json({

success:true,
qrCode

});


}
catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};




// DELETE QR

export const deleteQrCode = async(req,res)=>{


try{


const qr =
await deleteQrCodeService(
req.params.id
);



if(!qr){

return res.status(404).json({

success:false,
message:"QR not found"

});

}



res.status(200).json({

success:true,
message:"QR deleted"

});


}
catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};
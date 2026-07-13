import QrCode from "../models/QrCode.js";


// GET ALL QR

export const getQrCodesService = async()=>{

return await QrCode.find()
.sort({
uploadedAt:-1
});

};



// ADD QR

export const addQrCodeService = async(data)=>{

return await QrCode.create(data);

};



// DELETE QR

export const deleteQrCodeService = async(id)=>{

return await QrCode.findByIdAndDelete(id);

};
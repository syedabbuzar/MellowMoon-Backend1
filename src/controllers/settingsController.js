import Settings from "../models/Settings.js";


// GET SETTINGS

export const getSettings = async(req,res)=>{

try{

let settings = await Settings.findOne();


if(!settings){

settings = await Settings.create({
    siteName:"MellowMoon SoftTech",
    adminEmail:"syedabbuzar0777@gmail.com"
});

}


res.status(200).json({

success:true,
settings

});


}
catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};





// UPDATE SETTINGS

export const updateSettings = async(req,res)=>{

try{


const settings = await Settings.findOneAndUpdate(
{},
req.body,
{
new:true,
upsert:true
}
);



res.status(200).json({

success:true,
message:"Settings updated successfully",
settings

});


}
catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

};
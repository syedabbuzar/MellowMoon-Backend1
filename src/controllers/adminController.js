import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";
import generateToken from "../services/jwtService.js";


// ADMIN LOGIN

export const adminLogin = async(req,res)=>{

try{


const {email,password}=req.body;


if(!email || !password){

return res.status(400).json({

success:false,
message:"Email and Password required"

});

}



const admin = await Admin.findOne({
email:email.toLowerCase()
});


if(!admin){

return res.status(404).json({

success:false,
message:"Admin not found"

});

}



const match = await bcrypt.compare(
password,
admin.password
);



if(!match){

return res.status(401).json({

success:false,
message:"Invalid password"

});

}



const token = generateToken(admin);



return res.status(200).json({

success:true,

message:"Admin Login Successful",

token,

admin:{
id:admin._id,
name:admin.name,
email:admin.email,
role:admin.role
}


});



}catch(error){

res.status(500).json({

success:false,
message:error.message

});

}


};
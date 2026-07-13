import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";


export const createAdmin = async(
name,
email,
password
)=>{

const hashedPassword = await bcrypt.hash(password,10);


const admin = await Admin.create({

name,
email,
password:hashedPassword,
role:"admin"

});


return admin;

};
import dotenv from "dotenv";
import dns from "dns";
dotenv.config();
dns.setServers(["1.1.1.1","8.8.8.8"]);


import bcrypt from "bcrypt";
import connectDB from "./src/Congifdb/db.js";
import Admin from "./src/models/Admin.js";


await connectDB();


const hashedPassword = await bcrypt.hash(
  "MellowmoonSofttech@123",
  10
);


await Admin.create({

  name: "Syed Abbuzar",

  email: "mellowmoonsofttech@gmail.com",

  password: hashedPassword,

  role: "admin"

});


console.log("✅ Admin Created Successfully");

process.exit();
import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

console.log("USER:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "MellowMoon Email Verification OTP",
    html: `
      <div>
        <h2>MellowMoon Softech</h2>

        <p>Your OTP is:</p>

        <h1 style="letter-spacing:5px">${otp}</h1>

        <p>This OTP is valid for 5 minutes.</p>

        <br>

        <p>Thank You</p>
      </div>
    `,
  });
};

export default sendMail;
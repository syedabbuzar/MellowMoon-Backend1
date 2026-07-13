import bcrypt from "bcrypt";
import User from "../models/User.js";
import Otp from "../models/Otp.js";

import generateOTP from "../services/otpService.js";
import generateToken from "../services/jwtService.js";

import sendMail from "../utils/sendMail.js";


// ===============================
// CHECK EMAIL
// ===============================

export const checkEmail = async (req, res) => {
  try {

    const { email } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    return res.json({
      success: true,
      message: "Email available",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ===============================
// REGISTER
// ===============================

export const register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {

      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });

    }

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });

    }

    const otp = generateOTP();

    await Otp.deleteMany({
      email: email.toLowerCase(),
    });

    await Otp.create({

      email: email.toLowerCase(),

      otp,

      expiresAt: new Date(
        Date.now() + 5 * 60 * 1000
      ),

    });

    await sendMail(email, otp);

    return res.status(200).json({

      success: true,

      message: "OTP sent successfully",

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};


// ===============================
// OTP GENERATION ONLY
// ===============================

export const generateOtp = async (req, res) => {

  try {

    const { email } = req.body;

    const otp = generateOTP();

    await Otp.deleteMany({
      email: email.toLowerCase(),
    });

    await Otp.create({

      email: email.toLowerCase(),

      otp,

      expiresAt: new Date(
        Date.now() + 5 * 60 * 1000
      ),

    });

    await sendMail(email, otp);

    return res.status(200).json({

      success: true,

      message: "OTP Sent",

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};
// ===============================
// VERIFY OTP
// ===============================

export const verifyOtp = async (req, res) => {
  try {

    const { name, email, password, otp } = req.body;

    if (!name || !email || !password || !otp) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const otpData = await Otp.findOne({
      email: email.toLowerCase(),
      otp,
    });

    if (!otpData) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (otpData.expiresAt < new Date()) {

      await Otp.deleteOne({ _id: otpData._id });

      return res.status(400).json({
        success: false,
        message: "OTP Expired",
      });

    }

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      isVerified: true,
    });

    await Otp.deleteOne({
      _id: otpData._id,
    });

    const token = generateToken(user);

    return res.status(201).json({
      success: true,
      message: "Registration Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// ===============================
// LOGIN
// ===============================

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });

    }

    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });

    }

    const token = generateToken(user);

    return res.status(200).json({

      success: true,

      message: "Login Successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

// ===============================
// RESEND OTP
// ===============================

export const resendOtp = async (req, res) => {
  try {

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const otp = generateOTP();

    await Otp.deleteMany({
      email: email.toLowerCase(),
    });

    await Otp.create({
      email: email.toLowerCase(),
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    await sendMail(email, otp);

    return res.status(200).json({
      success: true,
      message: "OTP Resent Successfully",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// ===============================
// GET PROFILE
// ===============================

export const getProfile = async (req, res) => {

  try {

    const user = await User.findById(req.user.id).select("-password");

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    }

    return res.status(200).json({

      success: true,

      user,

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};
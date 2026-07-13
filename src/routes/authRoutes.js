import express from "express";

import {
  checkEmail,
  register,
  generateOtp,
  verifyOtp,
  login,
  resendOtp,
  getProfile,
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// =============================
// Public Routes
// =============================

// Check Email
router.post("/check-email", checkEmail);

// Register (Send OTP)
router.post("/register", register);

// Generate OTP
router.post("/generate-otp", generateOtp);

// Verify OTP & Create Account
router.post("/verify-otp", verifyOtp);

// Login
router.post("/login", login);

// Resend OTP
router.post("/resend-otp", resendOtp);

// =============================
// Protected Route
// =============================

// Get Logged In User Profile
router.get("/profile", authMiddleware, getProfile);

export default router;
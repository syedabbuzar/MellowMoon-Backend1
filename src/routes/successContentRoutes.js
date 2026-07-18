import express from "express";

import {
  getSuccessContent,
  updateSuccessContent,
} from "../controllers/successContentController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// Public GET (Student + Admin)
router.get(
  "/",
  getSuccessContent
);

// Admin Update Only
router.put(
  "/",
  authMiddleware,
  adminMiddleware,
  updateSuccessContent
);

export default router;
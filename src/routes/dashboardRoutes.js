import express from "express";

import {
  getDashboardData,
} from "../controllers/dashboardController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// Dashboard
router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getDashboardData
);

export default router;
import express from "express";

import {
  getApplications,
  updateApplicationStatus
} from "../controllers/applicationController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";


const router = express.Router();


// Get all applications (Admin)

router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getApplications
);


// Update Application Status

router.put(
  "/:id/status",
  authMiddleware,
  adminMiddleware,
  updateApplicationStatus
);


export default router;
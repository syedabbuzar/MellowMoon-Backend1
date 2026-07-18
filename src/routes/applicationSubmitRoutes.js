import express from "express";
import Application from "../models/Application.js";

import {
    submitApplication
} from "../controllers/applicationSubmitController.js";

const router = express.Router();

router.get("/check", async (req, res) => {
  const email = String(req.query.email || "").trim().toLowerCase();
  if (!email) return res.status(400).json({ success: false, message: "email required" });
  const app = await Application.findOne({ email });
  return res.json({ success: true, exists: !!app, application: app || null });
});

// Student Submit Application

router.post(
    "/submit",
    submitApplication
);

export default router;
import express from "express";

import {
  getAllCourses,
  getActiveCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// ===============================
// PUBLIC ROUTES
// ===============================

// Get Active Courses
router.get("/", getActiveCourses);

// ===============================
// ADMIN ROUTES
// ===============================

// Get All Courses
router.get(
  "/admin",
  authMiddleware,
  adminMiddleware,
  getAllCourses
);

// Create Course
router.post(
  "/admin",
  authMiddleware,
  adminMiddleware,
  createCourse
);

// Update Course
router.put(
  "/admin/:id",
  authMiddleware,
  adminMiddleware,
  updateCourse
);

// Delete Course
router.delete(
  "/admin/:id",
  authMiddleware,
  adminMiddleware,
  deleteCourse
);

export default router;
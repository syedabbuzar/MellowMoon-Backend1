import express from "express";

import {
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

// ===============================
// ADMIN ROUTES
// ===============================

// Get All Courses
router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getAllCourses
);

// Create Course
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createCourse
);

// Update Course
router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  updateCourse
);

// Delete Course
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteCourse
);

export default router;
import Course from "../models/Course.js";

// ===============================
// GET ALL COURSES
// ===============================

export const getAllCoursesService = async () => {
  return await Course.find().sort({ createdAt: -1 });
};

// ===============================
// GET ACTIVE COURSES
// ===============================

export const getActiveCoursesService = async () => {
  return await Course.find({ isActive: true }).sort({ createdAt: -1 });
};

// ===============================
// CREATE COURSE
// ===============================

export const createCourseService = async (data) => {
  return await Course.create(data);
};

// ===============================
// UPDATE COURSE
// ===============================

export const updateCourseService = async (id, data) => {
  return await Course.findByIdAndUpdate(id, data, {
    new: true,
  });
};

// ===============================
// DELETE COURSE
// ===============================

export const deleteCourseService = async (id) => {
  return await Course.findByIdAndDelete(id);
};
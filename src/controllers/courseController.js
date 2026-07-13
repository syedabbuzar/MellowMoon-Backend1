import {
  getAllCoursesService,
  getActiveCoursesService,
  createCourseService,
  updateCourseService,
  deleteCourseService,
} from "../services/courseService.js";

// ===============================
// GET ALL COURSES (ADMIN)
// ===============================

export const getAllCourses = async (req, res) => {
  try {
    const courses = await getAllCoursesService();

    return res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// GET ACTIVE COURSES (PUBLIC)
// ===============================

export const getActiveCourses = async (req, res) => {
  try {
    const courses = await getActiveCoursesService();

    return res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// CREATE COURSE
// ===============================

export const createCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      duration,
      registrationFee,
    } = req.body;

    if (
      !title ||
      !description ||
      !duration ||
      !registrationFee
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const course = await createCourseService({
      title,
      description,
      duration,
      registrationFee,
    });

    return res.status(201).json({
      success: true,
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// UPDATE COURSE
// ===============================

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await updateCourseService(
      id,
      req.body
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course updated successfully",
      course,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// DELETE COURSE
// ===============================

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await deleteCourseService(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
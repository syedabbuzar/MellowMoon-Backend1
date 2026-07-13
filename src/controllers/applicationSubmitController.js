import Application from "../models/Application.js";

// ===============================
// SUBMIT APPLICATION
// ===============================

export const submitApplication = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      college,
      education,
      duration,
      course,
      paymentScreenshot,
    } = req.body;

    // ===============================
    // Validation
    // ===============================

    if (
      !name?.trim() ||
      !email?.trim() ||
      !mobile?.trim() ||
      !college?.trim() ||
      !education?.trim() ||
      !duration?.trim() ||
      !course?.trim() ||
      !paymentScreenshot?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ===============================
    // Registration Fee
    // ===============================

    const registrationFees = {
      "2_months": 500,
      "6_months": 5000,
    };

    const registrationFee = registrationFees[duration];

    if (!registrationFee) {
      return res.status(400).json({
        success: false,
        message: "Invalid duration selected",
      });
    }

    // ===============================
    // Check Duplicate Application
    // ===============================

    const existingApplication = await Application.findOne({
      email: email.trim().toLowerCase(),
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "Application already submitted",
      });
    }

    // ===============================
    // Create Application
    // ===============================

    const application = await Application.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      college: college.trim(),
      education: education.trim(),
      duration,
      course: course.trim(),
      registrationFee,
      paymentScreenshot: paymentScreenshot.trim(),
      status: "pending",
    });

    // ===============================
    // Response
    // ===============================

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
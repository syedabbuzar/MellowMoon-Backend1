import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import dns from "dns";

import connectDB from "./src/Congifdb/db.js";

import contactRoutes from "./src/routes/contactRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import applicationRoutes from "./src/routes/applicationRoutes.js";
import applicationSubmitRoutes from "./src/routes/applicationSubmitRoutes.js";
import courseRoutes from "./src/routes/courseRoutes.js";
import adminCourseRoutes from "./src/routes/adminCourseRoutes.js";
import dashboardRoutes from "./src/routes/dashboardRoutes.js";
import qrRoutes from "./src/routes/qrRoutes.js";
import settingsRoutes from "./src/routes/settingsRoutes.js";
import successContentRoutes from "./src/routes/successContentRoutes.js";
import enquiryRoutes from "./src/routes/enquiryRoutes.js";
// DNS Resolver
dns.setServers([
  "1.1.1.1",
  "8.8.8.8"
]);

const app = express();

// ===============================
// DATABASE CONNECTION
// ===============================

try {
  await connectDB();
  console.log("✅ Database Connected");
} catch (error) {
  console.error("❌ Database Connection Failed:", error);
}

// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

// ===============================
// ROOT ROUTE
// ===============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MellowMoon SoftTech API Running Successfully 🚀"
  });
});

// ===============================
// ROUTES
// ===============================

// Contact
app.use("/contact", contactRoutes);

// Authentication
app.use("/api/auth", authRoutes);

// Admin Authentication
app.use("/api/admin", adminRoutes);

// Admin Applications
app.use("/api/admin/applications", applicationRoutes);

// Student Application Submit
app.use("/api/applications", applicationSubmitRoutes);

// Public Courses
app.use("/api/courses", courseRoutes);

// Admin Course CRUD
app.use("/api/admin/courses", adminCourseRoutes);

// ===============================
// EXPORT APP (VERCEL)
// ===============================

export default app;

// ===============================
// LOCAL SERVER
// ===============================

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}


// Dashboard
app.use(
  "/api/admin/dashboard",
  dashboardRoutes
);
// admin qr
app.use(
"/api/admin/qr",
qrRoutes
);

//setting admin 
app.use(
"/api/admin/settings",
settingsRoutes
);

//admin success content 
app.use(
"/api/admin/success-content",
successContentRoutes
);


//enquiries

app.use("/api/enquiries", enquiryRoutes);


// Admin Users

app.use(
"/api/admin/users",
userRoutes
);
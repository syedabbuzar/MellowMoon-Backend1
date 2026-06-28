import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import dns from "dns";

import connectDB from "./src/Congifdb/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";

dotenv.config();

// Optional: DNS resolver
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

// Connect Database
try {
  await connectDB();
  console.log("✅ Database Connected");
} catch (error) {
  console.error("❌ Database Connection Failed:", error);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MellowMoon SoftTech API Running Successfully 🚀",
  });
});

// Routes
app.use("/contact", contactRoutes);

// Export app for Vercel
export default app;

// Run only in local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./src/Congifdb/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MellowMoon SoftTech API Running Successfully",
  });
});

app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
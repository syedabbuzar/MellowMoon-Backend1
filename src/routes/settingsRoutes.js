import express from "express";

import {
getSettings,
updateSettings
}
from "../controllers/settingsController.js";


import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";


const router = express.Router();


// Get Settings

router.get(
"/",
authMiddleware,
adminMiddleware,
getSettings
);



// Update Settings

router.put(
"/",
authMiddleware,
adminMiddleware,
updateSettings
);



export default router;
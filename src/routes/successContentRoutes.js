import express from "express";

import {
getSuccessContent,
updateSuccessContent
}
from "../controllers/successContentController.js";


import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";


const router = express.Router();



// Get Content

router.get(
"/",
authMiddleware,
adminMiddleware,
getSuccessContent
);



// Update Content

router.put(
"/",
authMiddleware,
adminMiddleware,
updateSuccessContent
);



export default router;
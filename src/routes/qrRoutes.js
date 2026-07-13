import express from "express";


import {
getQrCodes,
addQrCode,
deleteQrCode
}
from "../controllers/qrController.js";


import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";


const router = express.Router();



router.get(
"/",
authMiddleware,
adminMiddleware,
getQrCodes
);



router.post(
"/",
authMiddleware,
adminMiddleware,
addQrCode
);



router.delete(
"/:id",
authMiddleware,
adminMiddleware,
deleteQrCode
);



export default router;
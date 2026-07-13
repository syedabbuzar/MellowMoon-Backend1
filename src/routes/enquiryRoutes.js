import express from "express";

import {
getEnquiries,
createEnquiry,
updateEnquiryStatus,
deleteEnquiry
}
from "../controllers/enquiryController.js";


import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";


const router = express.Router();



// USER CONTACT FORM

router.post(
"/",
createEnquiry
);



// ADMIN GET

router.get(
"/admin",
authMiddleware,
adminMiddleware,
getEnquiries
);



// UPDATE STATUS

router.put(
"/:id/status",
authMiddleware,
adminMiddleware,
updateEnquiryStatus
);



// DELETE

router.delete(
"/:id",
authMiddleware,
adminMiddleware,
deleteEnquiry
);



export default router;
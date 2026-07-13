import express from "express";

import {
    submitApplication
} from "../controllers/applicationSubmitController.js";


const router = express.Router();


// Student Submit Application


router.post(
    "/submit",
    submitApplication
);


export default router;
import express from "express";

import {
  createContactController,
  getAllContactsController,
  getContactByIdController,
  deleteContactController,
} from "../controllers/contactController.js";

const router = express.Router();

router.post(
  "/create-contact",
  createContactController
);

router.get(
  "/get-all-contacts",
  getAllContactsController
);

router.get(
  "/get-contact/:id",
  getContactByIdController
);

router.delete(
  "/delete-contact/:id",
  deleteContactController
);

export default router;
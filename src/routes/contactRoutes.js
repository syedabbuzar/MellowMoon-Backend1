import express from "express";

import {
  createContactController,
  getAllContactsController,
  getContactByIdController,
  updateContactStatusController,
  deleteContactController,
} from "../controllers/contactController.js";

const router = express.Router();

// Submit Contact Form
router.post(
  "/create-contact",
  createContactController
);

// Get All Contacts
router.get(
  "/get-all-contacts",
  getAllContactsController
);

// Get Contact By ID
router.get(
  "/get-contact/:id",
  getContactByIdController
);

// Update Status
router.put(
  "/update-contact/:id",
  updateContactStatusController
);

// Delete Contact
router.delete(
  "/delete-contact/:id",
  deleteContactController
);

export default router;
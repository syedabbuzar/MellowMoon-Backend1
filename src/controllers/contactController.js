import {
  createContactService,
  getAllContactsService,
  getContactByIdService,
  deleteContactService,
} from "../services/contactService.js";

export const createContactController = async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      interest,
      message,
    } = req.body;

    if (!name || !email || !interest || !message) {
      return res.status(400).json({
        success: false,
        message:
          "Name, Email, Interest and Message are required",
      });
    }

    const contact = await createContactService({
      name,
      company,
      email,
      phone,
      interest,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllContactsController = async (
  req,
  res
) => {
  try {
    const contacts = await getAllContactsService();

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getContactByIdController = async (
  req,
  res
) => {
  try {
    const contact = await getContactByIdService(
      req.params.id
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteContactController = async (
  req,
  res
) => {
  try {
    const deletedContact =
      await deleteContactService(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
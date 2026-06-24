import Contact from "../models/contactModel.js";

export const createContactService = async (contactData) => {
  return await Contact.create(contactData);
};

export const getAllContactsService = async () => {
  return await Contact.find().sort({
    createdAt: -1,
  });
};

export const getContactByIdService = async (contactId) => {
  return await Contact.findById(contactId);
};

export const deleteContactService = async (contactId) => {
  return await Contact.findByIdAndDelete(contactId);
};
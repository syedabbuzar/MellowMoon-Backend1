import Application from "../models/Application.js";
import Contact from "../models/contactModel.js";
import User from "../models/User.js";

export const getDashboardDataService = async () => {

  const totalApplications =
    await Application.countDocuments();

  const pendingApplications =
    await Application.countDocuments({
      status: "pending",
    });

  const approvedApplications =
    await Application.countDocuments({
      status: "approved",
    });

  const rejectedApplications =
    await Application.countDocuments({
      status: "rejected",
    });

  const totalUsers =
    await User.countDocuments();

  const totalEnquiries =
    await Contact.countDocuments();

  const recentApplications =
    await Application.find()
      .sort({ createdAt: -1 })
      .limit(5);

  const recentEnquiries =
    await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5);

  return {

    stats: {

      totalApplications,

      pendingApplications,

      approvedApplications,

      rejectedApplications,

      totalUsers,

      totalEnquiries,

    },

    recentApplications,

    recentEnquiries,

  };
};
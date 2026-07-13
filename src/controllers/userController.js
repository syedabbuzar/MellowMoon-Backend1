import User from "../models/User.js";
import Application from "../models/Application.js";


// GET ALL USERS (ADMIN)
export const getUsers = async (req, res) => {
  try {

    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });


    const usersWithApplications = await Promise.all(
      users.map(async (user) => {

        const applicationsCount = await Application.countDocuments({
          userId: user.email
        });


        return {
          id: user._id,
          email: user.email,
          name: user.name,

          registrationDate: user.createdAt,

          applicationsCount,

          lastLogin: user.updatedAt,

          status: user.isVerified 
            ? "active"
            : "pending"
        };

      })
    );


    res.status(200).json({
      success: true,
      users: usersWithApplications
    });


  } catch (error) {

    console.log(error);

    res.status(500).json({
      success:false,
      message:"Failed to fetch users"
    });

  }
};
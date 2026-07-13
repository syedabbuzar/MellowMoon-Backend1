import {
  getDashboardDataService,
} from "../services/dashboardService.js";

export const getDashboardData = async (req, res) => {

  try {

    const dashboard =
      await getDashboardDataService();

    return res.status(200).json({

      success: true,

      dashboard,

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};
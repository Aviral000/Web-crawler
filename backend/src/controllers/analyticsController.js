const Content = require('../models/Content');

const getAnalytics = async (req, res) => {
  try {
    const analytics = await Content.aggregate([
      { $unwind: "$queries" },
      { $group: {
          _id: "$url",
          totalQueries: { $sum: 1 },
          uniqueQueries: { $addToSet: "$queries.query" }
        }
      },
      { $project: {
          url: "$_id",
          totalQueries: 1,
          uniqueQueries: { $size: "$uniqueQueries" }
        }
      }
    ]);

    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAnalytics
};
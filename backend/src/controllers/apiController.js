const { crawlWebsite } = require('../services/crawlerService');
const { generateResponse } = require('../services/aiService');

const crawlAndRespond = async (req, res) => {
  try {
    const { url, query } = req.body;
    const content = await crawlWebsite(url);
    const response = await generateResponse(content, query);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  crawlAndRespond
};

const { generateResponse } = require('../services/aiService');

const crawlerAndResponse = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'query are required' });
  }

  try {
    const aiResponse = await generateResponse(query);
    res.status(200).json({ response: aiResponse });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate AI response' });
  }
};

module.exports = { crawlerAndResponse };

const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateResponse = async (content, userQuery) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Given the following content:\n\n${content.text}\n\nAnswer the question: ${userQuery}`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error(`Error generating AI response: ${error.message}`);
    throw new Error('AI processing failed');
  }
};

module.exports = {
  generateResponse,
};
const { feedbackService } = require('../services/userService');

const feedback = async (req, res) => {
    try {
        const userFeed = await feedbackService(req.body.userData);
        res.status(200).json({ feedback: userFeed });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { feedback }
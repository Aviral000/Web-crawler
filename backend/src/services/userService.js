const User = require('../models/User');

const feedbackService = async (data) => {
    try {
        const { name, email, feedback } = data;

        if(!name || !email || !feedback) {
            throw new Error("Please fill all the details as mentioned");
        }

        const existingUser = await User.findOne({ email: email });

        if(existingUser) {
            throw new Error("Chose another Email address");
        }

        const userFeedback = await User.create({ name, email, feedback });
        return userFeedback;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { feedbackService }
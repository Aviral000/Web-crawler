const router = require('express').Router();
const { feedback } = require('../controllers/userController');

router.post('/user-feedback', feedback);

module.exports = router;
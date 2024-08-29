const express = require('express');
const { crawlAndRespond } = require('../controllers/apiController');
const { getAnalytics } = require('../controllers/analyticsController');

const router = express.Router();

router.post('/crawl', crawlAndRespond);
router.get('/analytics', getAnalytics);

module.exports = router;
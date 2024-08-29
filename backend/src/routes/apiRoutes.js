const express = require('express');
const { crawlerAndResponse } = require('../controllers/aiController');
const { crawlAndRespond } = require('../controllers/apiController')

const router = express.Router();

router.post('/crawl', crawlAndRespond);
router.post('/generate-ai-response', crawlerAndResponse);

module.exports = router;

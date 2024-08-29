const express = require('express');
const { crawlAndRespond } = require('../controllers/apiController')

const router = express.Router();

router.post('/crawl', crawlAndRespond);

module.exports = router;

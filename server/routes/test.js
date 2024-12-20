const express = require('express');
const { testing } = require('../controller/testControllers');
const router = express.Router();

router.get('/Hii', testing); // Your endpoint

module.exports = router;

const express = require('express');
const {testing} = require("../controller/testContollers")
const router = express.Router();

router.get('/Hii', testing);

module.exports = router;



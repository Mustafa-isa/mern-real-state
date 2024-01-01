const express = require("express");
const router = express.Router();
const authContrllerRegister  = require('../controller/authController')
router.post('/register', authContrllerRegister);

module.exports = router;
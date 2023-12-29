const express = require("express");
const router = express.Router();
const authContrller  = require('../controller/authController')
router.post('/regsiter', authContrller);

module.exports = router;
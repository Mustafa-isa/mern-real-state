// routes.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get('/', userController);

module.exports = router;

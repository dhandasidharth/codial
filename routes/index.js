const express = require('express');
const router = express.Router();
const home_control = require('../controller/first_control');
router.get('/',home_control.home);
router.use('/users',require('./users'));
console.log("Router is up");
module.exports = router;
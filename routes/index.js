const express = require('express');
const router = express.Router();
const home_control = require('../controller/first_control');
router.get('/',home_control.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));
console.log("Router is up");
module.exports = router;
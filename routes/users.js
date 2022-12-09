const express = require('express');
const router = express.Router();
const user_cont = require('../controller/user_controller');
router.get('/profile',user_cont.profile);
module.exports = router;
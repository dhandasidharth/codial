const express = require('express');
const router = express.Router();
const user_cont = require('../controller/user_controller');
const passport = require('passport');
router.get('/profile',passport.checkAuthentication,user_cont.profile);
router.get('/sign_in',user_cont.sign_in);
router.get('/sign_up',user_cont.sign_up);
router.post('/users/create',user_cont.create);
router.post('/create-session',
    passport.authenticate(
        'local',
        {failureRedirect:'/users/sign_in'}
    ),
user_cont.createSession
);
module.exports = router;
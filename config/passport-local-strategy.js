const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
passport.use(new LocalStrategy({
    usernameField:'email'
    },
    function(email,password,done){
        User.findOne({email:email},function(err,user){
            if (err){
                console.log("error inside local strategy");
                return done(err);
            }
            if (!user || user.password != password){
                console.log("invalid input data");
                return done(null,false);
            }
            return done(null,user);
        })
    }
))

passport.serializeUser(function(user,done){
    done(null,user.id);
})
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if (err){
            console.log('error in deserialising user');
            return done(err);
        }
        return done(null,user);
    })
})

passport.checkAuthentication = function(req,res,next){
    if (req.isAuthenticated()){
        console.log('charso bis');
        return next();
    }
    res.redirect('/users/sign_in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if (req.isAuthenticated()){
        console.log('charso bis');
        res.locals.user = req.user;
    }
    next();
    return;

}

module.exports = passport;
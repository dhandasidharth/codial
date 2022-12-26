const User = require("../models/user");

module.exports.profile = function(req,res){
    res.render('user_profile');
    return;
}
module.exports.sign_up = function(req,res){
    if (req.isAuthenticated()){
        res.redirect('/users/profile');
        return;
    }
    res.render('signUp');
    return;
}
module.exports.sign_in = function(req,res){
    if (req.isAuthenticated()){
        res.redirect('/users/profile');
        return;
    }
    res.render('signIn');
    return;
}

module.exports.destroy = function(req,res){
    req.logout(function(err){
        if (err){console.log('error in logging out')};
        res.redirect('/');
        return;
    })
}

module.exports.create = function(req,res){
    console.log("run");
    if (req.body.password != req.body.confirm_password){
        res.redirect('back');
        return;
    }
    User.findOne({email : req.body.email},function(err,user){
        if (err){console.log('Error in finding user in sign up'); return;}
        if (!user){
            User.create(req.body,function(err,user){
                if (err){
                    console.log('error in creating');
                    return;
                }
                res.redirect('/users/sign_in');
            })
        }else{
            res.redirect('back')
        }
    })
}
module.exports.createSession = function(req,res){
    res.redirect('/');
}
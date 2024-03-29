const comment = require('../models/comment');
const Post = require("../models/posts");

module.exports.create = function(req,res){
    Post.findById(req.body.post,function(err,post){
        if (post){
            comment.create({
                content : req.body.content,
                post : req.body.post,
                user: req.user._id
            },function(err,comment){
                post.comments.push(comment);
                post.save();
                res.redirect('/');
            })
        }
    })
}
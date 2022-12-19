module.exports.home = function(req,res){
    console.log(req.cookies);
    res.cookie('munda',29);
    res.render('home',{
        title : "big bro"
    })
}
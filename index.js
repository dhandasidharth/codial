const express = require('express');
const port = 8000;
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const sass = require('node-sass-middleware');

app.use(
    sass({
        src : './assets/scss',
        dest : './assets/css',
        debug : true,
        outputStyle : 'extended',
        prefix : '/css'
    })
);


app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(expressLayouts);
app.use(express.static('./assets'));
app.set('view engine',"ejs");
app.set('views','./views');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
const db = require('./config/mongoose');
app.use(session({
    name : "codial",
    secret : "blah",
    saveUninitialised : false,
    resave : false,
    cookie : {
        maxAge : (1000*60*100)
    },
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes/index'));



app.listen(port,function(err){
    if (err){
        console.log(`We got Error: ${err}`);
        return;
    }
    console.log(`Server is up ${port}`);
})
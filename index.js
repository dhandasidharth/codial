const express = require('express');
const port = 8000;
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(expressLayouts);
app.use(express.static('./assets'));
app.use('/',require('./routes/index'));
app.set('view engine',"ejs");
app.set('views','./views');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
const db = require('./config/mongoose');






app.listen(port,function(err){
    if (err){
        console.log(`We got Error: ${err}`);
        return;
    }
    console.log(`Server is up ${port}`);
})
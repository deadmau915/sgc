var express = require('express');
var path = require('path');
var app = express();

// Routes
var router_login= require("./routes/router_login"),
    router_register= require("./routes/router_register"),
    router_document_management= require("./routes/router_document_management"),
    router_upload_document= require("./routes/router_upload_document"),
    router_user_management= require("./routes/router_user_management"),
    router_requests= require("./routes/router_requests"),
    router_settings= require("./routes/router_settings");


// dirname access
app.use(express.static('public'));
app.use('/jquery',express.static(path.join(__dirname,'node_modules','jquery','dist')));
app.use('/bootstrap',express.static(path.join(__dirname,'node_modules','bootstrap','dist')));

// Render pug/jade
app.set('views',path.join(__dirname,'views'));
app.set("view engine","pug");

// Views Render
app.use("/",router_login);
app.use("/",router_register);
app.use("/",router_document_management);
app.use("/",router_upload_document);
app.use("/",router_user_management);
app.use("/",router_requests);
app.use("/",router_settings);


app.listen(process.env.PORT || 8080);
//var inquirer = require('inquirer');
//var fs = require('fs');
var express = require('express');
var path = require('path');
//var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//HTML Routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});
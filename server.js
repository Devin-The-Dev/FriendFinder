var inquirer = require('inquirer');
var fs = require('fs');
var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});
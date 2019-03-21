var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});
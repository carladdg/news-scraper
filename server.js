require("dotenv").config();
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

var app = express();
app.use(logger(process.env.MORGAN_FORMAT));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = Promise;

app.listen(process.env.PORT, function() {
    console.log("App running on http://localhost:" + process.env.PORT)
})
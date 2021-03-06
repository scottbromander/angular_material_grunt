var express = require("express");
var app = express();
var db = require("./modules/db");
var index = require("./modules/index");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set("port", (process.env.PORT || 5000));

app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: " , app.get("port"));
});

module.exports = app;

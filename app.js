var express = require("express");
var exphbs = require ("express-handlebars");
var routes = require("./routes/routes.js");

var app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));


app.get("/", routes.home);

app.get("/:city", routes.city);

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("App running at localhost:" + port);
}) 
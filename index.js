//import dependencies
var express = require("express");
var fs = require("fs");
var port = process.env.PORT || 8081;
var morgan = require("morgan");
var bodyParser = require("body-parser");


//create express application for server side
var myApp = express();

//express to log via morgan
//and morgan to log in the "combined" pre-defined format
myApp.use(morgan("combined"));

//parses the text as URL encoded data and exposes the resulting object on req.body
myApp.use(bodyParser.urlencoded({
  extended: true
}));

//parses the text as JSON and exposes the resulting object on req.body
myApp.use(bodyParser.json());

//view options applied each time a view is rendered
myApp.set("view options", {
  layout: false
});

//returns a middleware that serves all files in that path
myApp.use(express.static(__dirname + "/public"));
 
//server side endpoint to get the home page where the food item details are available
myApp.get("/home", function (req, res) {
  //render the result in index.html
  res.render("public/index.html");
});


//listens for connections on the specified host and port
myApp.listen(port,function(err){
	if(err)
	{
		console.error(err);
		return;
	}
	console.log("App Server running at http://localhost:" + port);
});
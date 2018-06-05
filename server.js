// Dependencies
var express = require("express");
var bodyParser=require("body-parser");
// var methodOverride=require("method-override");
var path=require("path");
var exphbs = require("express-handlebars");
var burger =require("./models/burger.js")
// Create an instance of the express app.
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(methodOverride("_method"));

// process.env.PORT lets the port be set by Heroku
var PORT =process.env.PORT ||  3000;
app.use(express.static(path.join(__dirname,"public")))
// View engine.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/burger",function(req,res){
    // burger.all("burgers",function(results){
    //   console.log(results)
      res.render("index");
    })


    require('./controllers/routes.js')(app);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
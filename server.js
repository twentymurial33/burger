var express = require('express');
// var http=require("http");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var importRouter = require('./controllers/routes.js')['exportRouter']

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 7002);

app.use('/static', express.static('public/assets'));
app.use(express.static('models'));
app.get('/',function(request,response){
  connection.query('SELECT * FROM burgers', function(err, rows, fields)
  
      {
              console.log('Connection result error '+err);
              console.log('no of records is '+rows.length);
                      response.writeHead(200, { 'Content-Type': 'application/json'});
              response.end(JSON.stringify(rows));
      });
  
  } );
  

app.use('/', importRouter);
app.use('/create', importRouter);
app.use('/update', importRouter);

app.listen(PORT, function(){
  console.log("Listening on port", PORT);
});
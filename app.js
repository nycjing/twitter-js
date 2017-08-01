const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');


const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use(express.static('public'));

// APPS CONFIGURATION

app.use(volleyball);
app.use('/', routes);

// "Nunjucks-Express Combo Meal <3 Merges Express and Nunjucks easily
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
// nunjucks.configure('views'); // point nunjucks to the proper directory for templates
nunjucks.configure('views', { noCache: true }); //Use for learning so no caching, saves time



// *** SERVER CONFIGURATION

app.use(function (req, res, next) {
    // do your logging here
    //res.send("1"); // this is like a return statement
    console.log("1");
    next();// call `next`, or else your app will be a black hole — receiving requests but never properly responding
});


// parse application/x-www-form-urlencoded



app.get('/', function (req, res) {
  res.render( 'index', {title: 'Hall of Fame', people: people} );
// res.send('Hello World!')
});

app.get('/news', function (req, res) {
  res.send('Newsssss')
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

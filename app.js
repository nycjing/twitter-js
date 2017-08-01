const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

app.use(volleyball);

nunjucks.configure('views', { autoescape: true });
// nunjucks.render('index.html', { foo: 'bar' });

app.use(function (req, res, next) {
    // do your logging here
    //res.send("1"); // this is like a return statement
    console.log("1");
    next();// call `next`, or else your app will be a black hole — receiving requests but never properly responding
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/news', function (req, res) {
  res.send('Newsssss')
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

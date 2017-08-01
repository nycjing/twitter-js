const express = require('express');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true});
});

// say that a client GET requests the path /users/nimit
router.get( '/users/:id', function (req, res) {
  var id = Number(req.params.id);
  var list = tweetBank.find( {id: id} );
  res.render( 'index', { list: list } );
});

router.post('/tweets',urlencodedParser, function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;

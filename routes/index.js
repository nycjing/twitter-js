const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// say that a client GET requests the path /users/nimit
router.get( '/users/:id', function (req, res) {
  var id = Number(req.params.id);
  console.log(id, typeof id);
  var list = tweetBank.find( {id: id} );
  res.render( 'index', { list: list } );
});

module.exports = router;
  

var express = require('express');
var router = express.Router();
var path = require('path');

var room = require("../db/rooms.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('detail', { title: 'Express2222234' });
});

module.exports = router;

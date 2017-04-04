var express = require('express');
var router = express.Router();

var rooms = require("../db/rooms.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rooms', { rooms: rooms });
});

module.exports = router;

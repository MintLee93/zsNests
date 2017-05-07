var express = require('express');
var router = express.Router();

var db = require("../db/rooms.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  var rooms = db.rooms;
  res.render('rooms', { rooms: rooms });
});

module.exports = router;

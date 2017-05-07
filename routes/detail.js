var express = require('express');
var router = express.Router();

var db = require("../db/rooms.json");

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var rooms = db.rooms;
  var room = {};
  for(var i = 0; i < rooms.length; i++) {
    if (rooms[i].id == id) {
      console.log(rooms[i].name);
      room = rooms[i];
      break
    }
  }
  res.render('detail', {room: room});
});

module.exports = router;

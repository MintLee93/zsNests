/**
 * Created by RM on 2017/4/12.
 */
var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('intro');
});

module.exports = router;

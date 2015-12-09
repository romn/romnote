var config = require('config');
var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/', function (req, res) { res.render('index'); });
router.get('/notebooks/:id', function (req, res) { res.render('index'); });
router.get('/notebooks/:id/notes/:id2', function (req, res) { res.render('index'); });
router.use(require('./routes/data/notebook'));
router.use(require('./routes/data/note'));

module.exports = router;

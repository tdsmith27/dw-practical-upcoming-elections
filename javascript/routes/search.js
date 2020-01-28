var express = require('express');
var router = express.Router();
var us_states = require('../us_state.js');
const generateOCDID = require('../utils/generateOCDID');

/* POST search endpoint. */
router.post('/', function(req, res, next) {
  const address = req.body;
  const OCDID = generateOCDID(address);
  res.render('index', { title: 'Find My Election', states: us_states });
});

module.exports = router;
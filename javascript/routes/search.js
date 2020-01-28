var express = require('express');
var router = express.Router();
const axios = require('axios');
var us_states = require('../us_state.js');
const generateAddressObj = require('../utils/generateAddressObj');
const generateOCDID = require('../utils/generateOCDID');
const generateApiReqUrl = require('../utils/generateApiReqUrl');

/* POST search endpoint. */
router.post('/', function(req, res, next) {
  const reqHeaders = {headers: {Accept: 'application/json'}};
  const address = generateAddressObj(req.body);
  const OCDID = generateOCDID(address);
  const apiReqUrl = generateApiReqUrl(OCDID.state, OCDID.place);


  axios.get(apiReqUrl, reqHeaders).then(response => {
    // convert dates to a readable format
    let results = response.data.map(election => {
      election.date = new Date(election.date).toDateString();
      return election;
    });

    res.render('index', { title: 'Find My Election', states: us_states, results});
  }).catch(error => {
    res.render('error', {error})
  });

});

module.exports = router;
var express = require('express');
var router = express.Router();
var us_states = require('../us_state.js');
const generateAddressObj = require('../utils/generateAddressObj');
const generateOCDID = require('../utils/generateOCDID');
const generateApiReqUrl = require('../utils/generateApiReqUrl');

/* POST search endpoint. */
router.post('/', function(req, res, next) {
  const address = generateAddressObj(req.body);
  const OCDID = generateOCDID(address);
  const apiReqUrl = generateApiReqUrl(OCDID.state, OCDID.place);

  console.log(apiReqUrl);

  res.render('index', { title: 'Find My Election', states: us_states });
});

module.exports = router;
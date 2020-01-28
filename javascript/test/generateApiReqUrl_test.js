const tap = require('tap');
const generateApiReqUrl = require('../utils/generateApiReqUrl');

tap.test('generateApiReqUrl correctly formats state and place OCDID values', t => {
  const stateOCDID = `ocd-division/country:us/state:tx`;
  const placeOCDID = `ocd-division/country:us/state:tx/place:college_station`;
  const countyOCDID = `ocd-division/country:us/state:tx/county:brazos`;
  const OCDIDArray = [stateOCDID, placeOCDID, countyOCDID];

  const baseUrl = "https://api.turbovote.org/elections/upcoming?district-divisions="
  const reqUrl1 = `${baseUrl}${stateOCDID}`;
  const reqUrl2 = `${baseUrl}${stateOCDID},${placeOCDID}`;
  const reqUrl3 = `${baseUrl}${stateOCDID},${placeOCDID},${countyOCDID}`;

  t.equal(reqUrl1, generateApiReqUrl(stateOCDID), "Correctly generates reqUrl from state OCDID");
  t.equal(reqUrl2, generateApiReqUrl(stateOCDID, placeOCDID), "Correctly generates reqUrl from state and place OCDIDs");
  t.equal(reqUrl3, generateApiReqUrl(stateOCDID, placeOCDID, countyOCDID), "Correctly generates reqUrl from multiple OCDIDs");
  t.equal(reqUrl3, generateApiReqUrl(OCDIDArray), "Correctly generates reqUrl from array of OCDIDs");

  t.end();
});
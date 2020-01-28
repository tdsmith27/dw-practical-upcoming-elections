const tap = require('tap');
const generateOCDID = require('../utils/generateOCDID');

tap.test('generateOCDID correctly formats state and place OCDID values', t => {
  const addressObj = {state: "tx", city: "college_station"};
  const stateOCDID = `ocd-division/country:us/state:tx`;
  const placeOCDID = `ocd-division/country:us/state:tx/place:college_station`;
  const OCDIDObj = {state: stateOCDID, place: placeOCDID};

  t.equal(stateOCDID, generateOCDID(addressObj).state, "Correctly generates state OCDID from formatted address object");
  t.equal(placeOCDID, generateOCDID(addressObj).place, "Coarrectly generates place OCDID from formatted address object");
  t.same(OCDIDObj, generateOCDID(addressObj), "Correctly generates OCDID object from formatted address object");

  t.end();
});
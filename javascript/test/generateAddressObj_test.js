const tap = require('tap');
const generateAddressObj = require('../utils/generateAddressObj');

tap.test('generateAddressObj correctly formats state and city values', t => {
  const formatted = {state: "tx", city: "college_station"}
  const unformatted1 = {state: "TX", city: "college_station"};
  const unformatted2 = {state: "tx", city: "COLLEGE_STATION"};
  const unformatted3 = {state: "tx", city: "college station"};
  const unformatted4 = {state: "TX", city: "College Station"};
  
  t.same(formatted, generateAddressObj(formatted), "Output matches with a pre-formatted object");
  t.same(formatted, generateAddressObj(unformatted1), "Correctly formats uppercase state code")
  t.same(formatted, generateAddressObj(unformatted2), "Correctly formats upper case city name")
  t.same(formatted, generateAddressObj(unformatted3), "Correctly removes spaces in city name")
  t.same(formatted, generateAddressObj(unformatted4), "Correctly formats unformatted address fields")
  
  t.end();
})
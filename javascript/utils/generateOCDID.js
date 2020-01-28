module.exports = function(addressObj) {
  const OCDID = {};
  const {state, city} = addressObj;

  OCDID.state = `ocd-division/country:us/state:${state}`;
  OCDID.place = `ocd-division/country:us/state:${state}/place:${city}`;

  return OCDID;
};
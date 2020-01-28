module.exports = function(addressObj) {
  const OCDID = {};
  const {state, city} = addressObj;

  OCDID.state = `ocd-division/country:us/state:${state.toLowerCase()}`;
  OCDID.place = `ocd-division/country:us/state:${state.toLowerCase()}/place:${city.toLowerCase().replace(/\s/, "_")}`;

  return OCDID;
};
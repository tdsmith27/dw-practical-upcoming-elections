module.exports = function(data) {
  const addressObj = {};

  addressObj.state = data.state.toLowerCase();
  addressObj.city = data.city.toLowerCase().replace(/\s/, "_");

  return addressObj;
}
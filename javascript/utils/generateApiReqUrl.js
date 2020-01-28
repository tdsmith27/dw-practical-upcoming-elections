module.exports = function(...OCDIDs) {
  let apiUrl = "https://api.turbovote.org/elections/upcoming?district-divisions=";
  let OCDIDString = OCDIDs.join(",");
  let reqString = apiUrl + OCDIDString;

  return reqString;
}
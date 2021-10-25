var VaccinationList = artifacts.require("./VaccinationList.sol");

module.exports = function(deployer) {
  deployer.deploy(VaccinationList);
};

const informationRepo = require('./information.controller');

const getInformation = () => informationRepo.getGeneralInfo();

module.exports = { getInformation };

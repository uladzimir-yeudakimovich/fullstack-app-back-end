const getInformationRepo = require('./information.controller');

const getInformation = () => getInformationRepo.getGeneralInfo();

module.exports = { getInformation };

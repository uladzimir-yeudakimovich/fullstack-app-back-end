const Information = require('../../models/information.model');

const getGeneralInfo = async () => Information.find({});

module.exports = { getGeneralInfo };

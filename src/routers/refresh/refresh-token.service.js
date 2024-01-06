const refreshRepo = require('./refresh-token.controller');

const getNewAccessToken = token => refreshRepo.getAccessToken(token);
const getAllTokens = (id, login) => refreshRepo.getTokens(id, login);

module.exports = { getAllTokens, getNewAccessToken };

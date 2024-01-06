const registrationRepo = require('./registration.controller');

const registrationUser = user => registrationRepo.addUser(user);

module.exports = { registrationUser };

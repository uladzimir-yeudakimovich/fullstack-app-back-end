const User = require('../../models/user.model');

const addUser = async user => User.create(user);

module.exports = { addUser };

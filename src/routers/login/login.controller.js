const { compare } = require('bcrypt');

const User = require('../../models/user.model');

const loginUser = async (login, password) => {
  const user = await User.findOne({ login });
  const passwordCorrect =
    user === null ? false : await compare(password, user.password);
  if (!(user && passwordCorrect)) {
    return;
  }
  const { id } = user;
  return { user, id, login };
};

module.exports = { loginUser };

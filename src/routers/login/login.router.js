const router = require('express').Router();

const loginService = require('./login.service');
const tokenService = require('../refresh/refresh-token.service');
const User = require('../../models/user.model');

router.route('/').post(async (req, res) => {
  const { login, password } = req.body;
  const user = await loginService.loginUser(login, password);
  if (user) {
    const tokens = await tokenService.getAllTokens(user.id, user.login);
    res.status(200).send({
      message: 'Successful login.',
      user: User.toResponse(user),
      ...tokens
    });
  } else {
    res.status(401).json({ error: 'invalid username or password' });
  }
});

module.exports = router;

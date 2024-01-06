const router = require('express').Router();

const registrationService = require('./registration.service');
const tokenService = require('../refresh/refresh-token.service');
const User = require('../../models/user.model');

router.route('/').post(async (req, res, next) => {
  await registrationService
    .registrationUser(req.body)
    .then(async result => {
      const user = User.toResponse(result);
      const tokens = await tokenService.getAllTokens(user.id, user.login);
      res
        .status(200)
        .send({ message: 'Successful registration.', ...tokens, user });
    })
    .catch(error => next(error));
});

module.exports = router;

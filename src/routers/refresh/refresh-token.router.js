const router = require('express').Router();

const refreshTokenService = require('./refresh-token.service');

router.route('/').post(async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.status(401).json({ error: 'Refresh token is required' });
  }

  const result = await refreshTokenService.getNewAccessToken(refreshToken);
  if (result) {
    res.status(200).send({
      message: 'Successful refresh.',
      accessToken: result.accessToken
    });
  } else {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});

module.exports = router;

const { sign, verify } = require('jsonwebtoken');

const { JWT_SECRET_KEY } = require('../../common/config.js');

const getAccessToken = async token => {
  return verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return;
    }

    const { id, login } = decoded;

    if (!login) {
      return;
    }

    return {
      accessToken: sign({ id, login }, JWT_SECRET_KEY, { expiresIn: '5m' })
    };
  });
};

const getTokens = async (id, login) => {
  return {
    accessToken: sign({ id, login }, JWT_SECRET_KEY, { expiresIn: '5m' }),
    refreshToken: sign({ id, login }, JWT_SECRET_KEY, { expiresIn: '30m' }),
    expiresIn: 300,
    refreshTokenExpiresIn: 1800
  };
};

module.exports = { getAccessToken, getTokens };

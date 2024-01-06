const { routes } = require('../lib');

const reqWithToken = (req, token) => {
  const obj = {};
  for (const key in req) {
    if (Object.prototype.hasOwnProperty.call(req, key)) {
      const method = req[key];
      obj[key] = path => method(path).set('Authorization', token);
    }
  }
  return obj;
};

const authReq = async req => {
  const token = await req
    .post(routes.login)
    .set('Accept', 'application/json')
    .send({ login: 'admin', password: '123456' })
    .then(res => `Bearer ${res.body.accessToken}`);

  return reqWithToken(req, token);
};

module.exports = authReq;

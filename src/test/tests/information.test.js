const { request: unAuthReq, routes } = require('../lib');
const authReq = require('../utils/auth-req');

describe('Information suite auth', () => {
  let request = unAuthReq;

  beforeAll(async () => {
    request = await authReq(unAuthReq);
  });

  test('should get all information', async () => {
    await request
      .get(routes.information)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});

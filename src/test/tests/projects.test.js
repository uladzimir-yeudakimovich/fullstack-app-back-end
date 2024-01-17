const { request: unAuthReq, routes } = require('../lib');
const authReq = require('../utils/auth-req');

describe('Projects suite auth', () => {
  let request = unAuthReq;

  beforeAll(async () => {
    request = await authReq(unAuthReq);
  });

  test('should get all projects', async () => {
    await request
      .get(routes.projects)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});

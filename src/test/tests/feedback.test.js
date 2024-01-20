const { request: unAuthReq, routes } = require('../lib');
const authReq = require('../utils/auth-req');

const TEST_FEEDBACK_DATA = {
  name: 'admin',
  message: 'Hello world',
  time: '2024-01-20T11:12:04.394+00:00'
};

const NEW_TEST_FEEDBACK_DATA = {
  name: 'admin',
  message: 'Update successfully',
  time: '2024-01-20T11:15:04.394+00:00'
};

describe('feedback suite auth', () => {
  let request = unAuthReq;
  let feedbackId;

  beforeAll(async () => {
    request = await authReq(unAuthReq);
  });

  test('should get all feedbacks', async () => {
    await request
      .get(routes.feedbacks.getAll)
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('should create feedback successfully', async () => {
    await request
      .post(routes.feedbacks.create)
      .set('Accept', 'application/json')
      .send(TEST_FEEDBACK_DATA)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        feedbackId = res.body.id;
        expect(res.body).toMatchObject({
          name: TEST_FEEDBACK_DATA.name,
          message: TEST_FEEDBACK_DATA.message
        });
      });
  });

  test('should update feedback successfully', async () => {
    await request
      .put(routes.feedbacks.update(feedbackId))
      .set('Accept', 'application/json')
      .send(NEW_TEST_FEEDBACK_DATA)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).toMatchObject({
          message: NEW_TEST_FEEDBACK_DATA.message
        });
      });
  });

  test('should delete feedback successfully', async () => {
    await request
      .delete(routes.feedbacks.delete(feedbackId))
      .then(() => expect(204));
  });
});

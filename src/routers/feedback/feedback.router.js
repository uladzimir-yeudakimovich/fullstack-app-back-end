const router = require('express').Router({ mergeParams: true });

const feedbackService = require('./feedback.service');
const Feedback = require('../../models/feedback.model');

router.route('/').get(async (req, res, next) => {
  await feedbackService
    .getFeedbacks()
    .then(result => {
      res.json(result.map(Feedback.toResponse));
    })
    .catch(error => next(error));
});

router.route('/').post(async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  await feedbackService
    .addFeedback(id, body)
    .then(result => {
      res.json(Feedback.toResponse(result));
    })
    .catch(error => next(error));
});

router.route('/:id').put(async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  await feedbackService
    .editFeedback(id, body)
    .then(result => {
      if (result) {
        res.json(Feedback.toResponse(result));
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error));
});

router.route('/:id').delete(async (req, res, next) => {
  const { id } = req.params;
  await feedbackService
    .deleteFeedback(id)
    .then(() => {
      res.status(204).end();
    })
    .catch(error => next(error));
});

module.exports = router;

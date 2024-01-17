const router = require('express').Router();

const informationService = require('./information.service');
const Information = require('../../models/information.model');

router.route('/').get(async (req, res, next) => {
  await informationService
    .getInformation()
    .then(result => {
      res.json(result.map(Information.toResponse)[0]);
    })
    .catch(error => next(error));
});

module.exports = router;

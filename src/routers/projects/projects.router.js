const router = require('express').Router();

const projectsService = require('./projects.service');
const Projects = require('../../models/projects.model');

router.route('/').get(async (req, res, next) => {
  await projectsService
    .getProjects()
    .then(result => {
      res.json(result.map(Projects.toResponse));
    })
    .catch(error => next(error));
});

module.exports = router;

const projectsRepo = require('./projects.controller');

const getProjects = () => projectsRepo.getAllProjects();

module.exports = { getProjects };

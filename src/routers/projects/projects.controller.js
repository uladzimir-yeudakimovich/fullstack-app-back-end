const Projects = require('../../models/projects.model');

const getAllProjects = async () => Projects.find({});

module.exports = { getAllProjects };

const { project } = require("../database/models");

async function getProject() {
  const projects = await project.findAll();
  return projects;
}

async function saveProject(params) {
  let newProject = params;
  newProject.total_hours = 0;
  const projectCreated = await project.create(newProject);
  return projectCreated;
}

module.exports = { getProject, saveProject };

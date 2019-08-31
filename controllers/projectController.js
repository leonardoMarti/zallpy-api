const { project, appointment } = require("../database/models");

const paginate = ({ selectedPage, pageSize }) => {
  const offset = selectedPage * pageSize;
  const limit = offset + pageSize;

  return {
    offset,
    limit
  };
};

async function getProjects(page) {
  let pageSize;
  let selectedPage;

  if (page) {
    pageSize = 5;
    selectedPage = page;
  } else {
    pageSize = 999;
    selectedPage = 0;
  }

  const projects = await project.findAll({
    where: {},
    order: [["id", "ASC"]],
    ...paginate({ selectedPage, pageSize })
  });

  const paginated = {
    page,
    projects
  };

  return paginated;
}

async function getProjectById(id) {
  const projectFind = await project.findByPk(id);
  const appointmentFind = await appointment.findAll({
    where: { project_id: id }
  });
  return { project: projectFind, appointments: appointmentFind };
}

async function saveProject(params) {
  let newProject = params;
  newProject.total_hours = 0;
  const projectCreated = await project.create(newProject);
  return projectCreated;
}

module.exports = { getProjects, saveProject, getProjectById };

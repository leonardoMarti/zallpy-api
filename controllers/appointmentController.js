const { appointment, project } = require("../database/models");

async function saveAppointment(params) {
  const AppointmentCreated = await appointment.create(params);
  const projectFind = await project.findByPk(params.project_id);
  const projectUpdate = await project.update(
    { total_hours: Number(params.hours) + projectFind.total_hours },
    { where: { id: params.project_id } }
  );
  return AppointmentCreated;
}

module.exports = { saveAppointment };

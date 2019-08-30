const { appointment } = require("../database/models");

async function saveAppointment(params) {
  const AppointmentCreated = await appointment.create(params);
  return AppointmentCreated;
}

module.exports = { saveAppointment };

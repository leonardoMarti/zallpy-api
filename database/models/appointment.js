module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("appointment", {
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    hours: DataTypes.INTEGER,
    date: DataTypes.DATE
  });

  return Appointment;
};

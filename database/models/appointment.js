module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("appointment", {
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    hours: DataTypes.INTEGER,
    date: DataTypes.DATE
  });

  return Appointment;
};

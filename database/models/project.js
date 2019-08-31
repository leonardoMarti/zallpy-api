module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("project", {
    name: DataTypes.STRING,
    total_hours: DataTypes.INTEGER,
    description: DataTypes.TEXT
  });

  return Project;
};

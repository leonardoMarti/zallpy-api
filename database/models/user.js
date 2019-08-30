module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return User;
};

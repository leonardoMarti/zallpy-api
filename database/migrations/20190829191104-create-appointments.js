module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("appointments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      project_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      hours: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("appointments");
  }
};

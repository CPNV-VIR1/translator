const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('../utils/database');

const history = sequelize.define('History', {
  // Model attributes are defined here
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  input: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  output: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

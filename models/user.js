// const { DataTypes } = require("sequelize");

const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define("User", {
  user_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  xp: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = User;

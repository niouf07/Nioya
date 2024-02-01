const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Lvl = sequelize.define("lvl", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  guild_id: {
    type: Sequelize.STRING,
  },
  user_id: {
    type: Sequelize.STRING,
  },
  lvl_msg: {
    type: Sequelize.STRING,
    defaultValue: "Congratulations {member}, you've leveled up to {level}!",
  },
  lvl_channel: {
    type: Sequelize.STRING,
    defaultValue: "general",
  },
  lvl_role: {
    type: Sequelize.STRING,
    defaultValue: "Level {level}",
  },
  lvl_msg_delete: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  lvl_msg_delete_time: {
    type: Sequelize.INTEGER,
    defaultValue: 10,
  },
  lvl_msg_xp: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Lvl;

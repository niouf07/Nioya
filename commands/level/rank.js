const { SlashCommandBuilder } = require("discord.js");
const sequelize = require("../../utils/database");
const Users = require("../../models/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rank")
    .setDescription("Shows the rank of a user"),

  async execute(interaction) {
    // Get user stats from database
    const user = await Users.findOne({
      where: { user_id: interaction.user.id },
    });

    // Calculate level
    const level = Math.floor(0.1 * Math.sqrt(userStats.xp));

    await interaction.reply(`${user.username} is level ${level}`);
  },
};

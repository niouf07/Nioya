const { SlashCommandBuilder, MessageEmbed } = require("discord.js");
const fs = require("fs");
const path = require("path");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Display help information for commands")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("The category of commands to display")
        .setRequired(false)
    ),

  async execute(interaction) {
    if (category) {
      const categoryPath = path.join(__dirname, `./commands`);
      const categoryFiles = fs.readdirSync(categoryPath);
    }
    await interaction.reply({});
  },
};

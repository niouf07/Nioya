const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rank")
    .setDescription("Shows the rank of the user"),
  async execute(interaction) {
    const user = interaction.options.getUser("user");

    await interaction.reply("This command is not ready yet!");
  },
};

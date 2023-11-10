const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("Timeout a user for a specified time")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member to timeout")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("duration")
        .setDescription("Timeout duration in minutes")
        .setRequired(true)
    ),

  async execute(interaction) {
    const target = interaction.options.getMember("target");
    const duration = interaction.options.getInteger("duration");

    await target.timeout(duration * 60 * 1000);

    await interaction.reply(
      `${target} has been timed out for ${duration} minutes`
    );
  },
};

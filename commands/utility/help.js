const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Display help information for commands"),

  async execute(interaction) {
    const helpEmbed = new EmbedBuilder()
      .setColor(7419530)
      .setTitle("Help")
      .setDescription("Here are all the commands you can use with this bot")
      .addFields(
        { name: "Fun Commands", value: "/8ball : Ask a question to the 8ball" },
        {
          name: "Moderation Commands",
          value:
            "/kick : Kick a user from the server\n/ban : Ban a user from the server\n/to : Mute a user from the server\n/tempban : Temporarily ban a user from the server [Work in progress]",
        }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [helpEmbed] });
  },
};

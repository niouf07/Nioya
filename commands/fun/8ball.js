const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("8ball command")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("Question to ask")
        .setRequired(true)
    ),
  async execute(interaction) {
    const replies = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it",
    ];

    const randomIndex = Math.floor(Math.random() * replies.length);
    const randomReply = replies[randomIndex];
    const question = interaction.options.getString("question");

    const ball = new EmbedBuilder()
      .setColor(7419530)
      .setDescription("**Question:** " + question)
      .addFields({
        name: "**Answer:** " + randomReply,
        value: "**Author:** " + interaction.user.username,
        inline: true,
      })

      .setTimestamp();

    interaction.reply({ embeds: [ball] });

    // await interaction.reply(ball);
  },
};

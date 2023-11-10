const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with the bot ping!"),

  async execute(interaction) {
    await interaction.reply("Pong!");

    const start = Date.now();
    await wait(3000);
    const end = Date.now();

    await interaction.editReply(`Pong! Latency is ${end - start}ms`);
  },
};

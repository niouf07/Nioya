const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kicks a user from the server")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member to Kick")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

  async execute(interaction) {
    const user = interaction.options.getUser("target");

    await interaction.guild.members.kick(user);

    await interaction.reply(`Kicked ${user.tag} from the server.`);
  },
};

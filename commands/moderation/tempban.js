const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tempban")
    .setDescription("Tempbans a user from the server")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member to ban")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("duration")
        .setDescription("The duration of the ban in minute")
        .setRequired(true)
    )

    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

  async execute(interaction) {
    const guild = interaction.guild;

    const duration = interaction.options.getInteger("duration");

    const user = interaction.options.getUser("target");
    guild.members.ban(user);

    await guild.members.ban(user, {
      reason: `Banned by ${interaction.user.tag}`,
      days: duration,
    });

    await interaction.reply(
      `Banned ${user.tag} from the server dor ${duration} minutes.`
    );
  },
};

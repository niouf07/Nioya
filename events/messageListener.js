// events/messageListener.js

const Lvl = require("../models/lvl");
const { Events } = require("discord.js");
const sequelize = require("../utils/database");
console.log("const");

module.exports = {
  name: Events.MessageCreate,

  async execute(message) {
    // New code to handle leveling
    console.log("exports");
    const guildId = message.guild.id;
    const userId = message.author.id;
    let xp = 0;

    const userLvl = await Lvl.findOne({
      where: { guild_id: guildId, user_id: userId },
    });

    // Rest of leveling logic

    xp += 10;
    // etc...

    // Existing message logic
    if (message.author.bot) return;

    console.log(`${message.author.tag} sent: ${message.content}`);
  },
};
console.log("end");

// Import discord.js
const {
  Client,
  EmbedBuilder,
  GatewayIntentBits,
  Partials,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
console.log("import");
// Bot config
const config = require("../config.json");
const channelId = config.channelId;

// Create new client
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages, // for DMs
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
  ],
  partials: [Partials.Channel],
});
console.log("Import Intents ans Partials");
// When a DM is received
client.on("messageCreate", async (message) => {
  console.log("Hello");
  console.log(message.channel.type);
  // Only handle DMs
  if (message.channel.type === 1) {
    try {
      // Fetch target channel
      const channel = client.channels.cache.get(channelId);

      // Create embed
      const embed = EmbedBuilder.from({
        description: message.content,
        color: 5814783,
        author: {
          name: message.author.tag,
        },
      });

      const button1 = new ButtonBuilder()
        .setCustomId("accept")
        .setLabel("✅ Accepter")
        .setStyle(ButtonStyle.Success);

      channel.send({
        embeds: [embed],
        components: [{ type: 1, components: [button1] }],
      });

      console.log(`Sent message to channel ${channel.name}`);
      console.log(`MESSAGE: ${message.content}`);
    } catch (error) {
      console.error(error);
    }
  }
});

// Import discord.js
const { Client, EmbedBuilder, GatewayIntentBits } = require("discord.js");

// Bot config
const config = require("./config.json");
const token = config.token;
const channelId = config.channelId;

// Create new client
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages, // for DMs
  ],
});

// When bot is ready
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// When a DM is received
client.on("messageCreate", async (message) => {
  // Only handle DMs
  if (message.channel.type === "DM") {
    try {
      // Fetch target channel
      const channel = client.channels.cache.get(channelId);

      // Create embed
      const embed = new EmbedBuilder()
        .setAuthor(message.author.tag)
        .setDescription(message.content);

      channel.send({ embeds: [embed] });

      console.log("DM sent to channel!");
    } catch (error) {
      console.error(error);
    }
  }
});

// Log in with bot token
client.login(token);

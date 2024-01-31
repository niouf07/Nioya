const fs = require("node:fs");
const path = require("node:path");
const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
  ],
  partials: [Partials.Channel],
});
console.log("Intents ans Partials");

client.commands = new Collection();
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

const config = require("./config.json");
const channelId = config.channelId;

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
        .setLabel("✅ Accept")
        .setStyle(ButtonStyle.Success)
        .setCustomId("accept");

      const button2 = new ButtonBuilder()
        .setCustomId("refuse")
        .setLabel("❌ Refuse")
        .setStyle(ButtonStyle.Danger)
        .setCustomId("refuse");

      channel.send({
        embeds: [embed],
        components: [
          { type: 1, components: [button1] },
          { type: 1, components: [button2] },
        ],
      });

      client.on("interactionCreate", async (interaction) => {
        if (!interaction.isButton()) return;

        if (interaction.customId === "accept") {
          await interaction.reply("Accepted");
        } else if (interaction.customId === "refuse") {
          await interaction.reply("Refused");
        }
      });

      console.log(`Sent message to channel ${channel.name}`);
      console.log(`MESSAGE: ${message.content}`);
    } catch (error) {
      console.error(error);
    }
  }
});

client.login(token);

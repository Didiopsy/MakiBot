const { ShewenyClient } = require("sheweny");
const { Intents, Client, GatewayIntentBits } = require("discord.js");

const client = new ShewenyClient({
    intents: [GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
],
  partials: ["CHANNEL", "MESSAGE", "REACTION", "USER", "GUILD_MEMBER"],
  presence: {
    status: "dnd", // online, idle, dnd, invisible
    activities: [
      {
        name: "Maki nishikino",
        type: "PLAYING", // WATCHING, PLAYING, STREAMING, LISTENING, CUSTOM
      },
    ],
  },
  managers: {
    commands: {
      directory: "./commands",
      guildId: ["921728751434362901"],
      autoRegisterApplicationCommands: true,
      loadAll: true,
      prefix: "!",
    },
    events: {
      directory: "./events",
      loadAll: true,
    },
  },
});

module.exports = client;

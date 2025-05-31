// const { Command } = require("sheweny");
// const { createAudioResource, StreamType, AudioPlayer, createAudioPlayer, AudioPlayerStatus } = require('@discordjs/voice');
// const { createReadStream } = require('node:fs');
// const { AudioPlayerStatus } = require('@discordjs/voice');

// const path = require("path");

// function play_zic(connection) {
//   const ressource = createAudioResource(
//     path.join(__dirname, '../musique.wav'),
//     { inputType: StreamType.Arbitrary }
// );
//   const player  = createAudioPlayer();
//   connection.subscribe(player);
//   player.play(ressource);
//     player.on(AudioPlayerStatus.Idle, () => {
//     connection.destroy();
//     });
//   AudioPlayer.on(ressource);
// }
// const {
//   joinVoiceChannel,
//   entersState,
//   VoiceConnectionStatus,
// } = require("@discordjs/voice");
// const { join } = require("node:path");
// const { Player } = require("discord-player");

// module.exports = class JoinCommand extends Command {
//   constructor(client) {
//     super(client, {
//       name: "join",
//       description: "Fait rejoindre un salon vocal au bot",
//       category: "Vocal",
//     });
//   }

//   async execute(message) {
//     const channel = message.member?.voice?.channel;
//     if (!channel) {
//       return message.channel.send("Tu dois être dans un salon vocal.");
//     }
//     const connection = joinVoiceChannel({
//       channelId: channel.id,
//       guildId: channel.guild.id,
//       adapterCreator: channel.guild.voiceAdapterCreator,
//       selfDeaf: false,
//     });
//     try {
//       await entersState(connection, VoiceConnectionStatus.Ready, 5_000);
//     //   play_zic(connection);
//       message.channel.send(`Connectée à ${channel.name}`);
//     } catch (error) {
//       console.error("Erreur lors de la connexion vocale :", error);
//       message.channel.send("Impossible de rejoindre le salon vocal");
//     }
//   }
// };

const { Event } = require("sheweny");

module.exports = class MessageCreateEvent extends Event {
  constructor(client) {
    super(client, "messageCreate", {
      description: "Réagit au mot 'quoi'",
      once: false,
      emitter: client,
    });
  }

  execute(message) {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === "quoi") {
      message.channel.send("feur");
    }
    if (message.content.toLowerCase() === "yo") {
      message.channel.send("bonsoir");
    }
  }
};

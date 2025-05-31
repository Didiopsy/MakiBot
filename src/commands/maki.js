const { Command } = require("sheweny");

module.exports = class PingUserCommand extends Command {
  constructor(client) {
    super(client, {
      name: "maki",
      description: "Teste des commandes message",
      category: "Misc",
    });
  }

  execute(message) {
    message.reply({
      content: `maki nishikino ui !`,
    });
    console.log("ui");
  }
};

const { Command } = require("sheweny");

module.exports = class PingUserCommand extends Command {
  constructor(client) {
    super(client, {
      name: "ui",
      description: "ui",
      category: "Misc",
    });
  }

  execute(message) {
    message.reply({
      content: `ui`,
    });
  }
};

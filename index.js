const { token, prefix } = require("./config");
const { Client, Collection } = require("discord.js");

const client = new Client({
    disableMentions: "everyone"
});

client.prefix = prefix;
client.commands = new Collection();
client.aliases = new Collection();

require("./structures/command").run(client);
require("./structures/events").run(client);

client.login(token);
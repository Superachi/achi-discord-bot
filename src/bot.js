require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const PREFIX = '$';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

// Listen for messages and react
client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    console.log(CMD_NAME);
    console.log(args)

    switch (CMD_NAME) {
      case 'cat':
        message.channel.send('https://cataas.com/cat/says/hello%20world!');
        break;
      case 'ding':
        message.channel.send('Dong <:GachiGASM:375607923126173698>');
        break;
    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);

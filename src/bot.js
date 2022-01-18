require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const PREFIX = '$';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

// Continue tutorial... https://youtu.be/BmKXBVdEV0g?t=2256
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

    if (CMD_NAME === 'ding') {
      message.channel.send('Dong :gachiGASM:')
    }
  }
})

client.login(process.env.DISCORDJS_BOT_TOKEN);

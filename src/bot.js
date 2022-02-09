// Init
require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const PREFIX = '/';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// For Heroku, use settings > config vars
client.login(process.env.DISCORDJS_BOT_TOKEN);

const calc = (numA, operator, numB) => {
  let sum = 0;
  const a = Number.parseInt(numA, 10);
  const b = Number.parseInt(numB, 10);

  switch (operator) {
    case '+':
      sum = a + b;
      break;
    case '-':
      sum = a - b;
      break;
    case '/':
      sum = a / b;
      break;
    case '*':
      sum = a * b;
      break;
    default:
      return "I can't work with that input.";
  }

  if (Number.isNaN(sum)) {
    return "Sorry, can't solve this galaxy-brain equation.";
  }

  return sum;
};

// Listen for messages and react
client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content.includes('ikaruga')) {
    message.channel.send(
      'NOT A SINGLE DAY PASSES WITHOUT YOU TALKING ABOUT THAT 2D WOMAN'
    );
    return;
  }

  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    console.log(CMD_NAME);
    console.log(args);

    switch (CMD_NAME) {
      case 'ding':
        message.channel.send('Dong <:GachiGASM:375607923126173698>');
        break;
      case 'math':
        message.channel.send(calc(args[0], args[1], args[2]).toString());
        break;
      default:
        break;
    }
  }
});

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

const joshuaSays = () => {
  let message = "";
  const random_number = Math.floor(Math.random() * 11);
  switch (random_number) {
    case 1:
      message = "Make it nice.";
      break;
    case 2:
      message = "Spicy.";
      break;
    case 3:
      message = "Oh nee, jazzeurysm!!";
      break;
    case 4:
      message = "JAZZER GAMING";
      break;
    case 5:
      message = "GEBRUIK ASSEMBLY! :pog:";
      break;
    case 6:
      message = "BOTNET :epic:";
      break;
    case 7:
      message = "We zitten achter de prullenbak";
      break;
    case 8:
      message = "Vraag het!";
      break;
    case 9:
      message = ":sadcat:";
      break;
    case 10:
      message = ":flushed:";
      break;
    case 11:
      message = "JA";
      break;
    case 12:
      message = ":cucumber:";
      break;
    default:
      message = "Oops, couldn't pick a quote.";
      break;
  }

  return message;
}

// Listen for messages and react
client.on('messageCreate', message => {
  if (message.author.bot) return;

  const MessageContent = message.content.toLowerCase();

  if (MessageContent.startsWith(PREFIX)) {
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
      case 'joshua':
        message.channel.send(joshuaSays());
        break;
      default:
        break;
    }
  }
});

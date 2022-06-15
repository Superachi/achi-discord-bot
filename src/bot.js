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
  const quoteArray = [
    "Make it nice.",
    "Spicy.",
    "Oh nee, jazzeurysm!!",
    "JAZZER GAMING",
    "GEBRUIK ASSEMBLY!",
    "BOTNET",
    "We zitten achter de prullenbak.",
    "Vraag het!",
    ":flushed:",
    "WAARSCHUWING",
    "waar is mastop",
    "JA",
    ":cucumber:",
    "WE MOETEN PITCHEN",
    "Ben jij ook enthoujazzed?",
    "Dirty Cow!",
    "Ik kom uit grëüningen.",
    "Laat me even uitzieken.",
    "We gebruiken elementen van scrum.",
    "No spammerino in the chatterino!",
    "Ik wil de walkthrough maken :smile:",
    "We hebben al gereserveerd bij La Cubanita!",
    "SPEEDRUN!!",
    "JOKIE JOKIE",
    "#mail-check gogogo!!"
  ]
  
  const random_number = Math.floor(Math.random() * (quoteArray.length - 1));
  let message = quoteArray[random_number];
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

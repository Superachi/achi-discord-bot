// Init
require('dotenv').config();
const { Client, Intents } = require('discord.js');
const moduleSpeech = require('./module-speech')

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

// Rock, paper, scissors
const rpsGame = (userMessage, input) => {
  const messageResultWins = "I CAN'T BELIEVE I LOST!!";
  const messageResultLoss = "I win.";

  const item = input.toLowerCase();
  const itemArray = [
    "rock",
    "paper",
    "scissors"
  ]

  if (!itemArray.includes(item)) {
    return "Sorry, but you need to enter either 'rock', 'paper' or 'scissors'.";
  }

  const randomNumber = Math.floor(Math.random() * 3);
  const itemComputer = itemArray[randomNumber];
  userMessage.channel.send(`I choose ${itemComputer}!`);

  if (item === itemComputer) {
    return "Great minds think alike.";
  }

  let message = "";

  switch (item) {
    case "rock":
      if (itemComputer === "paper") {
        message = messageResultLoss;
      } else if (itemComputer === "scissors") {
        message = messageResultWins;
      }
      break;
    case "paper":
      if (itemComputer === "scissors") {
        message = messageResultLoss;
      } else if (itemComputer === "rock") {
        message = messageResultWins;
      }
      break;
    case "scissors":
      if (itemComputer === "rock") {
        message = messageResultLoss;
      } else if (itemComputer === "paper") {
        message = messageResultWins;
      }
      break;
    default:
      message = "Oops, I don't know what to do here.";
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
        message.channel.send(moduleSpeech.joshuaSays());
        break;
      case 'eva':
        message.channel.send(moduleSpeech.evaSays());
        break;
      case 'mastop':
      case 'cheyenne':
        message.channel.send(moduleSpeech.cheyenneSays());
        break;
      case 'talitha':
      case 'taat':
        message.channel.send(moduleSpeech.talithaSays());
        break;
      case 'pascal':
        message.channel.send(moduleSpeech.pascalSays());
        break;
      case 'rps':
        message.channel.send(rpsGame(message, args[0]));
        break;
      default:
        break;
    }
  }
});

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
    "Make it nice!",
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
    "#mail-check gogogo!!",
    "@pascal HELP met software pls",
    "Oh, ben ik aan de beurt?",
    "Wie is aan de beurt?",
    "nee",
    "Sorry, ik kan niet antwoorden. Ik zit in de rowing pit!!",
    "*Legt een kaart neer, ook al is het niet zijn beurt*",
    "Dat is pimping zoals Erwin zou zeggen",
    "Teken Fiora!",
    "Ik wil geen Roy zijn",
    "We zitten nu helemaal achteraan in de bus. Waar alleen de coole kinderen mogen zitten.",
    "Shrekmate!",
    "Doe een keer mee met de CTF challenge!",
    "Capture the Shrek!",
    "Dat is een goede CTF team naam.",
    "DOE HET",
    "Ohhhnonono :joy:"
  ]
  
  const random_number = Math.floor(Math.random() * quoteArray.length);
  let message = quoteArray[random_number];
  return message;
}

// Rock, paper, scissors
const rpsGame = (input) => {
  const message_result_wins = "I CAN'T BELIEVE I LOST!!";
  const message_result_loses = "I win.";

  const item = input.toLowerCase();
  const item_array = [
    "rock",
    "paper",
    "scissors"
  ]

  if (!item_array.includes(item)) {
    return "Sorry, but you need to enter either 'rock', 'paper' or 'scissors'.";
  }

  const random_number = Math.floor(Math.random() * 3);
  const item_computer = item_array[random_number];

  if (item == item_computer) {
    return "Great minds think alike.";
  }

  let message = "";

  switch (item) {
    case "rock":
      if (item_computer == "paper") {
        message = message_result_loses;
      } else if (item_computer == "scissors") {
        message = message_result_wins;
      }
      break;
    case "paper":
      if (item_computer == "scissors") {
        message = message_result_loses;
      } else if (item_computer == "rock") {
        message = message_result_wins;
      }
      break;
    case "scissors":
      if (item_computer == "rock") {
        message = message_result_loses;
      } else if (item_computer == "paper") {
        message = message_result_wins;
      }
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
      case 'rps':
        message.channel.send(rpsGame(args[0]));
        break;
      default:
        break;
    }
  }
});

const randomArrayElement = array => {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

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
  
  return randomArrayElement(quoteArray);
}

const evaSays = () => {
  const quoteArray = [
    "PP raat",
    "Ah shit mann",
    "Excuseer mij?",
    "IK GA JOU SLAAN",
    "Wat heb ik besteld?",
    "*SCREAMS*",
    "*breaths*",
    "Im broke :KEKW:",
    "Ik heb 3 cent op m'n bankrekening :pepega:",
    "Kijk m'n lange shlong!! :pog:",
    "*gooit koffie over eigen laptop*",
    "*@mastop* ben jij al begonnen aan *insert subject here*?",
    "Fapse!",
    "*Wappert met handen tijdens spreken*",
    "Uwu, er is een buggy wuggy in mijn fuzzy wuzzy :weary:"
]
  
  return randomArrayElement(quoteArray);
}

const pascalSays = () => {
  const quoteArray = [
      "Pog frog",
      "Uh huh",
      "*gets blamed for everything*",
      "MEER",
      "Pingpong time!",
      "Skippa",
      "*neemt teken tablet mee*",
      "Kijk! Dit is wat ik nu teken! :D",
      "*stuurt sneak peaks*",
      "F",
      "Q",
      "Ik wil een Shrek achtergrond",
      "*gaat tijdens de les MEER halen*",
      "Is er sale?",
      "Buggy wuggy"
  ]
  
  return randomArrayElement(quoteArray);
}

const talithaSays = () => {
  const quoteArray = [
      "STOPP", 
      "Doe nou niet zoo",
      "TRUE",
      "@pascal HELP", 
      "Disney?!",
      "*neemt teken tablet mee*",
      "MASTOP",
      "Niet spieken",
      "Ik ga even tekenen",
      "Wie gaat er schudden? *schud zelf*",
      "Mastop, nu mag jij gaan schudden",
      "Wacht @pascal stuur je hun nou sneak peaks?!",
      "Pascal, wanneer kan je nou schudden?"
  ]
  
  return randomArrayElement(quoteArray);
}

const cheyenneSays = () => {
  const quoteArray = [
      "Zo boos", "gelijk boos", 
      "Don’t bully the bully",  
      "Ik ga chocolademelk halen", 
      "Ik ga koffie halen",
      "Niet kijken!", 
      "Ga je mee?", 
      "SUCCES", 
      "Shut up!", 
      "PASCAL",
      "VEEL PLEZIER",
      "PASCAL, HET IS ALTIJD WEER JOUW SCHULD!", 
      "Niet alles draait om jou, Pascal",
      "Heb je de wordle al gedaan?",
      "*Posts Morbius meme*", 
      "*@salt* ben jij al begonnen aan *insert subject here*?",
      "Ik pest @pascal :)",
      "*is op cursus Nederlands*",
      "Eva, je hebt wel een cursus voor je Nederlands nodig",
      "*maakt zelf taalfouten*",
      "That's what she said"
  ]
  
  return randomArrayElement(quoteArray);
}

module.exports = {
  joshuaSays,
  cheyenneSays,
  talithaSays,
  pascalSays,
  evaSays
}
const qBank = [
  {
    question:
      "What year did the Transformers live action movie release?",
    answers: ["2010", "2008", "2005", "2007"],
    correct: "2007",
    questionId: "099099"
  },
  {
    question:
      "Who has directed all the transformers live action films?",
    answers: ["Michael Bay", "Martin Scorsese", "Steven Spielberg", "Quentin Tarantino"],
    correct: "Michael Bay",
    questionId: "183452"
  },
  {
    question:
      "What did Optimus Prime transform into?",
    answers: ["18 Wheeler", "Gun", "Bus", "Plane"],
    correct: "18 Wheeler",
    questionId: "267908"
  },
  {
    question: "Who was the leader of the Autobots?",
    answers: [
      "Frenzy",
      "Megatron",
      "Optimus Prime",
      "Starscream"
    ],
    correct: "Optimus Prime",
    questionId: "333247"
  },
  {
    question: "What R&B singer played a role in the Transformers live action film?",
    answers: ["Trey Songs", "Tyrese Gibson", "Chris Brown", "Prince"],
    correct: "Tyrese Gibson",
    questionId: "496293"
  },
  {
    question:
      "How many Transformers movies have been made since the year 2011?",
    answers: [
      "1",
      "4",
      "3",
      "2"
    ],
    correct: "3",
    questionId: "588909"
  },
  {
    question:
      'Who was the leader of the Decepticons?',
    answers: ["Megatron", "Bumblebee", "Starscream", "Bonecrusher"],
    correct: "Megatron",
    questionId: "648452"
  },
  {
    question: "What kind of Transformers car did the teenage boy own?",
    answers: ["Charger", "Corvette", "Mustang", "Camaro"],
    correct: "Camaro",
    questionId: "786649"
  },
  {
    question:
      "What was the name of the Transformers home planet?",
    answers: ["Mars", "Suntronics", "Cybertron", "Trans Earth"],
    correct: "Cybertron",
    questionId: "839754"
  },
  {
    question:
      "Who was the teenage boy that was friends with the Autobots?",
    answers: [
      "Phillip",
      "Tron",
      "Sam",
      "Tim"
    ],
    correct: "Sam",
    questionId: "98390"
  },
  {
    question: "What was the Transformers cartoon called in Japan?",
    answers: ["Fight! Super Robot Life Form Transformers", "Robots from space", "Warcraft Force Changers", "Transform"],
    correct: "Fight! Super Robot Life Form Transformers",
    questionId: "1071006"
  },
  {
    question: "What is the name of Sam's dog?",
    answers: ["Rex", "Riley", "Mojo", "Buster"],
    correct: "Mojo",
    questionId: "1174154"
  },
  {
    question: "Who did Sentinel Prime kill in Tranformers: Dark Of The Moon?",
    answers: ["Bumblebee", "Ironhide", "Starscream", "Shockwave"],
    correct: "Ironhide",
    questionId: "1226535"
  },
  {
    question: "Who's gun did Optimus Prime use to kill Sentinel Prime?",
    answers: ["Soundwave", " Megatron", "Shockwave", "Starscream"],
    correct: "Megatron",
    questionId: "1310938"
  },
  {
    question: "What is Mark Wahlberg's character called?",
    answers: ["Cade Yeager", "Samuel James Witwicky", "Lucas", "Joshua"],
    correct: "Cade Yeager",
    questionId: "1436873"
  },
  {
    question: "What band plays the theme song for Transformers: Age of Extinction?",
    answers: ["Red Hot Chilli Peppers", "Pink Floyd", "AC/DC", "Imagine Dragons"],
    correct: "Imagine Dragons",
    questionId: "1515110"
  },
  {
    question: "What college does Sam go to?",
    answers: ["Princeton University", "UCLA", "Columbia University", "Duke University"],
    correct: "Princeton University",
    questionId: "1642728"
  },
  {
    question:
      "Who died from Lockdown's grenade? ",
    answers: ["Cade", "Tessa", "Lucas", "Joshua"],
    correct: "Lucas",
    questionId: "1747256"
  },
  {
    question:
      "What word represents the letter 'T' in the NATO phonetic alphabet?",
    answers: ["Tango", "Target", "Taxi", "Turkey"],
    correct: "Tango",
    questionId: "1822532"
  },
  {
    question:
      "What is Sam's Ebay username called out by Barricade?",
    answers: ["Actionman22", "Icefox", "Ladiesman217", "Lastman4"],
    correct: "LadiesMan217",
    questionID: "195075"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));

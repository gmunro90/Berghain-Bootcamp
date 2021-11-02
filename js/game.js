"use strict"; //what is this?
class Game {
  constructor() {
    this.player = null;
    this.answers= [];
    this.gameIsOver = false;
    this.score = 0;
    this.progressBar = 0;
    this.timer = 0;
    this.lives = 0;

  }

// this returns random q but then needs already asked qs function to store

getRandomCard(){ //eventually will return RANDOM q, not first index
  return this.myCards[Math.floor(Math.random()*this.myCards.length)]//this.myCards[0]//currently taking 0 index of myCards array
}

getNextQuestionBtn (){
  return this.myCards[1];
}   

/*takeALifeOff (){
}*/

myCards = [
  {
    question: "Where was Techno music first pioneered?",
    answers: [
     "Ibiza, Spain", "New York, USA", "London, UK", "Detroit, USA"
    ],

    correctAnswer: "Detroit, USA" // also can gove the index of the correct answer
  },
  {
    question: "In which era was Techno music developed in?",
    answers: [
      "1990s", "2010s", "1980s","2000s"
    ],
    correctAnswer: "1980s"
  },
  {
    question: "In which location was the now closed, world-famous nightclub Space?",
    answers: [
      "Miami", "Ibiza", "Mallorca", "Manchester"
    ],
    correctAnswer: "Ibiza"
  },
  {
    question: "Who composed the famous techno track 'The Bells'?",
    answers: [
      "Jeff Mills", "Carl Cox", "Amelie Lens", "Laurent Garnier"
    ],
    correctAnswer: "Jeff Mills"
  },
  {
    question: "In which country is Sunwaves Festival held twice a year?",
    answers: [
      "Italy", "China", "Romania","Fiji"
    ],
    correctAnswer: "Romania"
  },
  {
    question: "Barcelona is home to which of these famous techno DJs?",
    answers: [
      "Dubfire, Maceo Plex, Marco Carola","Peggy Gou, Green Velvet, Sven Väth", "Deborah de Luca, Adam Beyer, Chris Liebing","Ben Klock, Marco Carola, Joseph Capriati"
    ],
    correctAnswer: "Dubfire, Maceo Plex, Marco Carola"
  },
  {
    question: "Who is often considered 'The Father of Techno'?",
    answers: [
      "Marco Santonastasi", "Enrique Iglesias", "Juan Atkins", "Derrick May"
    ],
    correctAnswer: "Juan Atkins"
  },
  {
    question: "What is the most utilized instrument by original techno producers?",
    answers: [
      "TR-808", "SH-101", "TB-303", "NI-909"
    ],
    correctAnswer: "TR-808"
  },
  {
    question: "In which country is Timewarp Festival held every April?",
    answers: [
      "Germany", "France", "Scotland", "Portugal"
    ],
    correctAnswer: "Germany"
  },
  {
    question: "Which of these DJs is a regular resident at Berghain?",
    answers: [
      "David Guetta", "Ben Klock", "Locomia", "Oxia"
    ],
    correctAnswer: "Ben Klock"
  }
]
}
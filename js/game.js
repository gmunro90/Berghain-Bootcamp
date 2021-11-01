"use strict"; //what is this?
class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.player = null;
    this.questions = [];
    this.gameIsOver = false;
    this.score = 0;
    this.progressBar = 0;
    this.timer = 0;
    this.lives = 0;

  }


start() {
  // this.player = new Player('greg');

}

getRandomCard(){ //eventually will return RANDOM q, not first index
  return this.myCards[1]
}



myCards = [
  {
    question: "Where was Techno music first pioneered?",
    answers: [
     "Ibiza, Spain", "New York, USA", "London, UK", "Detroit, USA"
    ],

    correctAnswer: ""
  },
  {
    question: "In which era was Techno music developed in?",
    answers: {
      a: "1990s",
      b: "2010s",
      c: "1980s",
      d: "2000s"
    },
    correctAnswer: "c"
  },
  {
    question: "In which location was the now closed, world-famous nightclub Space?",
    answers: {
      a: "Miami",
      b: "Ibiza",
      c: "Mallorca",
      d: "Manchester"
    },
    correctAnswer: "b"
  },
  {
    question: "Who composed the famous techno track 'The Bells'?",
    answers: {
      a: "Jeff Mills",
      b: "Carl Cox",
      c: "Amelie Lens",
      d: "Laurent Garnier"
    },
    correctAnswer: "a"
  },
  {
    question: "In which country is Sunwaves Festival held twice a year?",
    answers: {
      a: "Italy",
      b: "China",
      c: "Romania",
      d: "Fiji"
    },
    correctAnswer: "c"
  },
  {
    question: "Barcelona is home to which of these famous techno DJs?",
    answers: {
      a: "Dubfire, Maceo Plex, Marco Carola",
      b: "Peggy Gou, Green Velvet, Sven Väth",
      c: "Deborah de Luca, Adam Beyer, Chris Liebing",
      d: "Ben Klock, Marco Carola, Joseph Capriati"
    },
    correctAnswer: "a"
  }
]
}
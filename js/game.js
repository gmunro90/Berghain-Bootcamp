"use strict"; //what is this?
class Game {
  constructor() {
    this.player = null;
    this.questions = [];
    this.answers= [];
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
  return this.myCards[0]//currently taking 0 index of myCards array
}

/*nextQuestion (){
  return this.myCards[1]
}

function setNextQuestion() {
  reset()

function reset() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
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
    question: "QUESTION 7?",
    answers: [
      "ANSWERS 7"
    ],
    correctAnswer: "CORRECT ANSWER 7"
  },
  {
    question: "QUESTION 8?",
    answers: [
      "ANSWERS 8"
    ],
    correctAnswer: "CORRECT ANSWER 8"
  },
  {
    question: "QUESTION 9?",
    answers: [
      "ANSWERS 9"
    ],
    correctAnswer: "CORRECT ANSWER 9"
  }
]
}
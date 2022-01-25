"use strict";
class Game {
  constructor() {
    this.score = 0;
    this.lives = 2;
    this.questions = [...this.myCards];
    this.answeredQst = [];
    this.count = 0;
  }

  getRandomCard() {
    let currentQIndx = Math.floor(Math.random() * this.questions.length);
    let currentQst = this.questions[currentQIndx];
    this.answeredQst.push(currentQst);
    this.questions.splice(currentQIndx, 1);

    return currentQst;
  }

  scoreUp() {
    this.score += 1;
  }

  takeLife() {
    this.lives -= 1;
  }

  myCards = [
    {
      question: "Where was Techno music first pioneered?",
      answers: ["Ibiza, Spain", "New York, USA", "London, UK", "Detroit, USA"],
      correctAnswer: "Detroit, USA",
    },

    {
      question: "In which era was Techno music developed in?",
      answers: ["1990s", "2010s", "1980s", "2000s"],
      correctAnswer: "1980s",
    },
    {
      question:
        "In which location was the now closed, world-famous nightclub 'Space'?",
      answers: ["Miami", "Ibiza", "Mallorca", "Manchester"],
      correctAnswer: "Ibiza",
    },
    {
      question: "Who composed the famous techno track 'The Bells'?",
      answers: ["Jeff Mills", "Carl Cox", "Amelie Lens", "Laurent Garnier"],
      correctAnswer: "Jeff Mills",
    },
    {
      question: "In which country is Sunwaves Festival held twice a year?",
      answers: ["Italy", "China", "Romania", "Fiji"],
      correctAnswer: "Romania",
    },
    {
      question: "Barcelona is home to which of these famous techno DJs?",
      answers: ["Adam Beyer", "Sven Väth", "Dubfire", "Joseph Capriati"],
      correctAnswer: "Dubfire",
    },
    {
      question: "Who is often considered 'The Father of Techno'?",
      answers: [
        "Marco Santonastasi",
        "Enrique Iglesias",
        "Juan Atkins",
        "Derrick May",
      ],
      correctAnswer: "Juan Atkins",
    },
    {
      question:
        "What is the most utilized instrument by original techno producers?",
      answers: ["TR-808", "SH-101", "TB-303", "NI-909"],
      correctAnswer: "TR-808",
    },
    {
      question: "In which country is Timewarp Festival held every April?",
      answers: ["Germany", "France", "Scotland", "Portugal"],
      correctAnswer: "Germany",
    },
    {
      question: "Which of these DJs is a regular resident at Berghain?",
      answers: ["David Guetta", "Ben Klock", "Locomia", "Oxia"],
      correctAnswer: "Ben Klock",
    },
  ];
}

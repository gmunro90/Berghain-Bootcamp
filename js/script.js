const nextButton = document.getElementById('next-button')

let shuffledQuestions = shuffledQuestions = myCards.sort(() => Math.random());
let currentQuestionIndex =  0;

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    console.log(currentQuestionIndex)
  })
//builds general DOM to be updated dynamically
const buildDom = (HTML) => {
  let main = document.querySelector("main");
  main.innerHTML = HTML;
};

// First Screen => Splash Screen
const buildSplashScreen = () => {
  buildDom(`

<div class="splash-screen">

  <h1>Berghain Bootcamp</h1>
  
      
  <h2 class="prove">Prove your techno music knowledge and earn the right to enter Berghain!</h2>
  <img src="images/imageedit_13_8878481949.png" class="berglogo" alt="berghain-logo">
  
  <button id="start-button">Start</button>
  
  <div class="rules">
  <h2 class="rules-title">Rules</h2><br>
  <div class="rules-list">
  
      <ul>
          <li class="instruction">You will have <span>10 seconds</span> to answer each question, related to dance music</li>
          <li class="instruction">You must answer 6 questions correctly to enter Berghain</li>
          <li class="instruction">You have 2 lives, use them all and you're not getting in</li>
      </ul>
  </div>
</div>
    

</header>
  
    
`);

  //START BUTTON
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", buildGameScreen);
};

//BRINGS NEW QUESTIONS + ANSWERS
function buildCardHTML(card) {
  let prompt = `<h2>${card.question}</h2>`;

  const htmlAnswer = card.answers.reduce(function (html, answer) {
    html += `<a class="answer">` + answer + `</a>`;
    return html;
  }, "");

  return `${prompt}` + htmlAnswer;
}

//Builds scores, lives + timer when game screen loaded
const buildDomGame = (cardHTML) => {
  //here you can affect the visuals and html of the game screen
  let main = document.querySelector("main");
  main.innerHTML =
    `<div class="score">
    <p>Score: ${game.score} / 6 </p>
    <p>lives: ${game.lives}</p></div>
    <p class="timer">You have: ${10} seconds remaining!</p>
    <ol>` +
    cardHTML +
    `</ol>` +
    `<audio controls autoplay loop>
    <source src="audio/muffledqueue.mp3" type="audio/mpeg">
    </audio>`;

  //TIMER

  let interval = setInterval(function () {
    document.getElementsByClassName("timer").innerHTML = game.count;
    game.count--;
  }, 1000);

  if (game.count === -1) {
    //this lets it hit 0 then action the clearInterval
    clearInterval(interval);
    {
      //OUT OF TIME, TAKE A LIFE LOGIC
      main = document.querySelector("main");
      main.innerHTML = `
        
        <audio  <audio controls autoplay>
        <source src="audio/incorrect.mp3" type="audio/mpeg">
      </audio>
      <div class="incorrect-section">
      <div class="incorrect-text">OUT OF TIME...<br>you lost a life!</div><button id="next-button">NEXT QUESTION</button></div>`;

      const nextBtn = document.getElementById("next-button");
      nextBtn.addEventListener("click", buildGameScreen);
      game.takeLife();
      if (game.lives === 0) {
        buildGameOver();
      }
    }
  }
};

//RELOADS THE PAGE WHEN PLAY AGAIN BUTTON IS CLICKED
const restart = () => {
  document.location.href = "";
  game;
};

// Second Screen => Game Screen
const buildGameScreen = () => {
  //logic of the game screen + affect html dependant on actions
  //brings the game class and builds the elements needed

  const card = game.getRandomCard(); //gets a question from shuffled deck
  const cardHTML = buildCardHTML(card); //builds the html of the questions

  buildDomGame(cardHTML);

  let choices = document.querySelector("ol"); //logic of choices, correct or incorrect...
  choices.addEventListener("click", function (event) {
    //let correct = false
    if (event.target.innerText === card.correctAnswer) {
      // CORRECT ANSWER LOGIC
      main = document.querySelector("main");
      main.innerHTML = `
      <audio  <audio controls autoplay>
      <source src="audio/correct.mp3" type="audio/mpeg">
      </audio>
      <div class="correct-section">
      <h2 class="correct-text">CORRECT!</h2><br><br><button id="next-button">NEXT QUESTION</button>
      </div>`;

      const nextBtn = document.getElementById("next-button");
      nextBtn.addEventListener("click", buildGameScreen);
      game.scoreUp(); //adding points

      //if above === reaches 6, build WINNER html
      if (game.score === 6) {
        main = document.querySelector("main");
        main.innerHTML = `
        <div class="winning-screen">
        <h2 class="welcome-text">Welcome to Berghain, come in!</h2><br>
        <img src="images/giphy.gif" class="dancing-kid" alt="dancing-kid">
        <button id="otravez">PLAY AGAIN?</button></div>
        <audio  <audio controls autoplay>
        <source src="audio/Winner.mp3" type="audio/mpeg">`;
        const playAgainBtn = document.getElementById("otravez");
        playAgainBtn.addEventListener("click", restart); //buildGameScreen);
      }
    } else {
      //INCORRECT ANSWER LOGIC
      main = document.querySelector("main");
      main.innerHTML = `
      
      <audio  <audio controls autoplay>
      <source src="audio/incorrect.mp3" type="audio/mpeg">
    </audio>
    <div class="incorrect-section">
    <div class="incorrect-text">INCORRECT...you lost a life!</div><button id="next-button">NEXT QUESTION</button></div>`;

      const nextBtn = document.getElementById("next-button");
      nextBtn.addEventListener("click", buildGameScreen);
      game.takeLife();
      if (game.lives === 0) {
        buildGameOver();
      }
    }
  });
};

// Third Screen => Game Over
function buildGameOver() {
  buildDom(`
  

  <section class="game-over">
    <h1 class="game-over-text">Game Over</h1>
    <h3 class="kebab-text">Sorry, you'll just have to settle for a Döner tonight...</h3>
    <img src="images/kebab-food.gif" class="kebab">
    
    <br><button id="otravez">PLAY AGAIN?</button>
    
    <audio  <audio controls autoplay>
  <source src="audio/GameOverAudio.mp3" type="audio/mpeg">
    
    </section>

    `);

  const playAgainBtn = document.getElementById("otravez");
  playAgainBtn.addEventListener("click", restart);
  play;

  /*game = null;*/
}

const game = new Game();

// When the window loads, then we will run the "buildSplashScreen" function
// "load" waits for the html and JS
window.addEventListener("load", buildSplashScreen);

//builds general DOM to be updated dynamically
const buildDom = (HTML) => {
  let main = document.querySelector("main");
  main.innerHTML = HTML;
};

// First Screen => Splash Screen
const buildSplashScreen = () => {
  buildDom(`

  <audio controls autoplay>
  <source src="audio/muffledqueue.mp3" type="audio/mpeg">
  </audio>

<div class="splash-screen">

  <h1>Berghain Bootcamp</h1>
  
      
  <h2 class="prove">Prove your techno music knowledge and earn the right to enter Berghain!</h2>
  <img src="images/imageedit_13_8878481949.png" class="berglogo" alt="berghain-logo">
  
  <button id="start-button">Start</button>
  
  <div class="rules">
  <h2 class="rules-title">Rules</h2><br>
  <div class="rules-list">
  
      <ul>
          <li class="instruction">You will have <span>10 seconds</span> to answer each question related to dance music</li>
          <li class="instruction">You must answer all 6 questions correctly to enter Berghain</li>
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
  let prompt = card.question;

  const htmlAnswer = card.answers.reduce(function (html, answer) {
    html += "<a class=answer>" + answer + "</a>";
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
    <p>Score: ${game.score} </p></div>` +
    `<p>lives: ${game.lives}</p>` +
    `<br><p>You have: <span id="timer">10</span> seconds remaining!</p>` +
    `<ol>` +
    cardHTML +
    `</ol>`;

  //TIMER
  /*let count = 10;
  let interval = setInterval(function () {
    document.getElementById("timer").innerHTML = `${count}`;
    count--;
    if (count === -1) {
      //this lets it hit 0 then action the clearInterval
      clearInterval(interval);
      document.getElementById("timer");
      if (lifeCount > 0){ //want to get it to take a life if lives status is higher than 0 else, gameOver
       takeLife();
      } else {
        buildGameOver()
      }
    }
  }, 1000);*/
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
    </audio>CORRECT!<button id="next-button">NEXT QUESTION</button>`;

      const nextBtn = document.getElementById("next-button");
      nextBtn.addEventListener("click", buildGameScreen);
      game.scoreUp(); //adding points

      //if above === reaches 6, build WINNER html
      if (game.score === 6) {
        main = document.querySelector("main");
        main.innerHTML = `
        <img src="images/bcee3f84ac741cf2c35b60a5e4dfbf43.jpg" alt="berghain-logo">
        WINNER<br><button id="otravez">PLAY AGAIN?</button>`;
        const playAgainBtn = document.getElementById("otravez");
        playAgainBtn.addEventListener("click", buildGameScreen);
      }
    } else {
      //INCORRECT ANSWER LOGIC
      main = document.querySelector("main");
      main.innerHTML = `
      <audio  <audio controls autoplay>
      <source src="audio/button-10.mp3" type="audio/mpeg">
    </audio>INCORRECT...you lost a life!<button id="next-button">NEXT QUESTION</button>`;

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

    <h1>Game Over</h1>
    <h3>Sorry, you'll have to settle for just a Döner tonight...</h3>
    
    <br><button id="otravez">PLAY AGAIN?</button>
    
    </section>

    `);

  const playAgainBtn = document.getElementById("otravez");
  playAgainBtn.addEventListener("click", buildGameScreen);

  /*game = null;*/
}

const game = new Game();

// When the window loads, then we will run the "buildSplashScreen" function
// "load" waits for the html and JS
window.addEventListener("load", buildSplashScreen);

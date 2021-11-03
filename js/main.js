function buildCardHTML(card) {
  let prompt = card.question;

  const htmlAnswer = card.answers.reduce(function (html, answer) {
    html += "<li>" + answer + "</li>";
    return html;
  }, "");

  return `${prompt}` + htmlAnswer; //why not have this in backtick string too?
}

// General function that will update the HTML content dynamically
const buildDomGame = (cardHTML) => {
  //here you can affect the visuals and html of the game screen
  let main = document.querySelector("main");
  main.innerHTML =
    `
    <div class="score">
    <p>Score: ${game.score} </p></div>` +
    `<p>lives: ${game.lives}</p>` +
    "<ol>" +
    cardHTML +
    "</ol>";
};

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
      
      <button id="start-button">Start</button><br><br>
      
      <div class="rules"><center>
      <div class="rules-title"><span>Rules</span></div>
      <div class="rules-list">
      
          <ul>
              <li class="instruction">You will have <span>10 seconds</span> to answer each question related to dance music</li>
              <li class="instruction">You must answer all 6 questions correctly to enter Berghain</li>
              <li class="instruction">You have 2 lives, use them all and you're not getting in</li>
          </ul>    </center>
      </div>
    </div>
    `);

  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", buildGameScreen);
};

// Second Screen => Game Screen

const buildGameScreen = () => {
  //logic of the game screen + affect html dependant on actions
  //const newScore = resetScoreUp();
  const card = game.getRandomCard();
  const cardHTML = buildCardHTML(card);

  buildDomGame(cardHTML);

  let choices = document.querySelector("ol");
  choices.addEventListener("click", function (event) {
    //let correct = false
    if (event.target.innerText === card.correctAnswer) {
      main = document.querySelector("main");
      main.innerHTML =
        `CORRECT` +
        `<br><br><button id="next-button">` +
        `NEXT QUESTION` +
        `</button>`;

      const nextBtn = document.getElementById("next-button");
      nextBtn.addEventListener("click", buildGameScreen);
      game.scoreUp(); //adding points
      //if above === reaches 6, build WINNER html
      if (game.score === 1) {
        //console.log('youWIN')
        main = document.querySelector("main");
        main.innerHTML =
          `WINNER` + `<br><button id="otravez">PLAY AGAIN?</button>`;
        const playAgainBtn = document.getElementById("otravez");
        playAgainBtn.addEventListener("click", buildGameScreen);
      }
    } else {
      main = document.querySelector("main");
      main.innerHTML = `INCORRECT...you lost a life!<br><br><button id="next-button">NEXT QUESTION</button>`;

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
}

const game = new Game();

// When the window loads, then we will run the "buildSplashScreen" function
// "load" waits for the html and JS
window.addEventListener("load", buildSplashScreen);

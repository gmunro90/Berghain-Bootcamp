function buildCardHTML(card){
  let prompt = card.question
  const answers = card.answers.map((answer)=> {
    return (  
    `<ol>`+
      `<li>${answer} </li>` +
    `</ol>`
    )
  })

  let answersHTML = `<div id="game-board">${prompt}</div>`+
  answers;

  return answersHTML
}


//<button id="quit">Give Up</button>

// General function that will update the HTML content dynamically
const buildDom = (html) => {
    const main = document.querySelector("main");
    main.innerHTML = html;
  };
  
  // First Screen => Splash Screen
  const buildSplashScreen = () => {
    buildDom(`
    <h1>In The Queue for Berghain</h1>
    <img src="./images/1200px-Berghain-Logo.svg.png" alt="berghain-logo" style="width: 45%;"/>

    </br>
    <button id="start-button">Start</button>

    <div class="rules">
    <div class="rules-title"><span>Rules</span></div>
    <div class="rules-list">
    <p>You must prove knowledge of dance music and earn the right to enter Berghain!</p>
        <ul>
            <li>You will have <span>10 seconds</span> to answer each question related to dance music</li>
            <li>You must answer all 6 questions correctly to enter Berghain</li>
            <li>You have 2 lives, use them all and you're not getting in</li>
        </ul>    
</div>	
    `);
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", buildGameScreen);
  };
    

   // Second Screen => Game Screen

  const buildGameScreen = () => {
    const card = game.getRandomCard();
    const cardHTML = buildCardHTML(card)
    
    buildDom (cardHTML)

    const endButton = document.getElementById("quit");
   // endButton.addEventListener("click", buildGameOver);

    }

  
  // Third Screen => Game Over
  const buildGameOver = () => {
    buildDom(`
    <section class="game-over">
    <h1>Game Over</h1>
    <h3>Sorry, you'll have to settle for just a Döner tonight...</h3>
    <button id = "game">TRY AGAIN</button>
    <div class= "pointer"> </div>
    </section>
    `);
  
    const restartButton = document.querySelector("button");
    restartButton.addEventListener("click", buildGameScreen);
  };

const game = new Game();
game.start();
buildGameScreen();



  // When the window loads, then we will run the "buildSplashScreen" function
  // "load" waits for the html and JS
  window.addEventListener("load", buildSplashScreen);

function buildCardHTML(card){
  let prompt = card.question

  const htmlAnswer = card.answers.reduce(function (html, answer) {
    html += '<li>' + answer + '</li>';
    return html;
  }, '');

  return `${prompt}` + htmlAnswer;//why not have this in backtick string too?

}


// General function that will update the HTML content dynamically
const buildDom = (cardHTML) => {
    let main = document.querySelector("main");
    main.innerHTML = "<ol>" + cardHTML + "</ol>";
};
  
  // First Screen => Splash Screen
  const buildSplashScreen = () => {
    buildDom(`
    <h1>Berghain Bootcamp</h1>
    <h2 class="prove">Prove your techno music knowledge and earn the right to enter Berghain!</h2>
    <img src="images/imageedit_13_8878481949.png" class="berglogo" alt="berghain-logo">
    
    <button id="start-button">Start</button><br><br>
    
    <div class="rules"><center>
    <div class="rules-title"><span>Rules</span></div>
    <div class="rules-list">
    
        <ul>
            <li>You will have <span>10 seconds</span> to answer each question related to dance music</li>
            <li>You must answer all 6 questions correctly to enter Berghain</li>
            <li>You have 2 lives, use them all and you're not getting in</li>
        </ul>    </center>
</div>
    `);
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", buildGameScreen);
  };
    
   // Second Screen => Game Screen

  const buildGameScreen = () => {
    const card = game.getRandomCard();
    const cardHTML = buildCardHTML(card);
    
    buildDom(cardHTML)
     

    let choices = document.querySelector("ol")
    choices.addEventListener('click',function(event) {
  
    //let correct = false //IS THERE A WAY I CAN TURN THE BELOW INTO A FUNCTION THAT CAN THEN RETURN IF CORRECT ADD POINT IF INCORRECT TAKE LIFE?
    if(event.target.innerText === card.correctAnswer) {
    main = document.querySelector('main')
    main.innerHTML = (`CORRECT` + `<br><br><button id="next-button">`+ `NEXT QUESTION` + `</button>`)
    
    const nextBtn = document.getElementById('next-button')
    nextBtn.addEventListener('click', buildGameScreen)

    /*const addPoint = document.getElementById('points-counter')
    forEach (card.correctAnswer){
      addPoint.innerText(+=1)
    }*/

   } else {
    main = document.querySelector('main')
    main.innerHTML = (`INCORRECT you lost a life!<br><br><button id="next-button">NEXT QUESTION</button>`)

    const nextBtn = document.getElementById('next-button')
    nextBtn.addEventListener('click', buildGameScreen)
      }
    })
  }



  // Third Screen => Game Over
  function buildGameOver() {
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
}

const game = new Game();
buildGameScreen();



  // When the window loads, then we will run the "buildSplashScreen" function
  // "load" waits for the html and JS
  window.addEventListener("load", buildSplashScreen);
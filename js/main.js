
function buildCardHTML(card){
  let prompt = card.question

  const htmlAnswer = card.answers.reduce(function (html, answer) {
    html += '<li>' + answer + '</li>';
    return html;
  }, '');

  
  /*let scoreboard = document.querySelector("main");
  scoreboard.innerHTML = (`<div id="score">`+ `testTEXTtest` +`</div>`)*/

 
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
    <!--<img src="./images/berghain logo.jpeg" alt="berghain-logo" style="width: 65vw;"/>-->
    </br>
    <button id="start-button">Start</button><br><br>
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
    const cardHTML = buildCardHTML(card);
    
    buildDom(cardHTML); 

  /*let scoreboard = main = document.querySelector('main')
  main.innerText = (`<p>` + `score here` + `</p>`)*/   
        
      
    let choices = document.querySelector("ol")
    choices.addEventListener('click',function(event) {
  
    let correct = false
    console.log(event.target.innerText, card.correctAnswer)
    console.log(event.target.innerText === card.correctAnswer)

    if(event.target.innerText === card.correctAnswer) {
    main = document.querySelector('main')
    main.innerHTML = (`CORRECT` + `<br><br><button id="next-button">`+ `NEXT QUESTION` + `</button>`)
    
    const nextBtn = document.getElementById('next-button')

    nextBtn.addEventListener('click', buildGameScreen)


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
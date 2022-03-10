# Berghain Bootcamp

This is a browser based quiz game that requires the user to answer 6 correct questions relating to techno music and dance culture. The questions are randomised, and the user has 2 lives. If all lives are used up by answering questions incorrectly, it's game over.

The game is based on entering the infamous Berlin nightclub 'Berghain' which is notoriously difficult to get in, as the security on the door ask clients questions relating to the event inside, in order to filter their clientele.

## MVP (DOM - CANVAS)

I have rendered a game in the browser with logic for winning/losing. Seperate HTML/CSS/JS is included with plain JS used for DOM manipulation.

## Backlog

- Include functioning timer, timer is workign but when new question generates, countdown acts irratically. Otherwise, logic is functioning to arrive at 0 and take a life off.

- Styling with reactive answers, like 'Who Wants To Be A Millionaire', when you select an answer it flashes red/green dependant on correct/incorrect value.

## Data structure

I have 1 game class controlling the varying properties of the game that need to be dynamically updated dependant on user action.

My methods are quite simple, since the game structure is not too demanding. I have a random question generator, that pushes already asked questions to a new array, whilst shuffling through the remaining array's index to generate a new question each round.

## States and States Transitions

- splashScreen is generated on window load. Builds inner HTML with a start button, background image and logo, and rules of the game. On click the start button generates a buildGameScreen function.

- gameScreen is generated via the buildDomGame function which generates a new 'card' html which is where the questions and 4 possible answers is initiated and presented to the user. The buildGameScreen function is initiated alongside this in order to bring the game logic, generating a random question and loading the correct/incorrect interaction and results dependant on user action.

- gameoverScreen is generated once the user's lives = 0. It is a basic game over screen that plays a sad crowd noise and displays a little 'Berlin' joke to the user.

- winScreen generates when the player reaches 6 correctly answered questions (without their lives reaching 0). This screen generates audio (actual audio from inside Berghain) to let the user know they have successfully gained access and it's time to party!

### Git

[Link Repo](https://github.com/gmunro90/project1)
[Link Deploy](https://gmunro90.github.io/Berghain-Bootcamp/)

### Slides

[Link Slides.com](https://tinyurl.com/tfvwp4c8)

# Rock, Papers, Scissors Project
## About the Project
This project was made as part of The Odin Project <a href="https://www.theodinproject.com/lessons/foundations-rock-paper-scissors">curriculum</a>. It is a game of Rock, Paper, Scissors made with a UI. The rules of the game are written on the page.

The images used in the project are from:
- <a href="toppng.com">toppng.com</a>
- <a href="citypng.com">citypng.com</a>

Live demo: https://alinc10.github.io/Rock-Papers-Scissors/

## How It's Made:
Tech used: HTML, CSS, JavaScript

The project was made following the rules of the game and after the following plan:
- The player is asked to choose an item and the input is stored in a variable;
- The computer choice will be made using a random number between 1-3, 1 for rock, 2 for paper and 3 for scissors;
- The game will be played until the player or the computer reach 5 rounds won;
- After the game ends, the player has the option to play again.

To create the game I created some functions:
- getPlayerChoice() - returns the item chose by the player;
- getComputerChoice() - creates a random number between 1-3 and it converts in an item for the game, 1=rock, 2=paper, 3=scissors;
- playRound(playerChoice, computerChoice) - it uses the player and computer choices to decide the winner and it return 1 if the player won, 2 if the computer won, 0 if it's a tie and prints a message for the player;

The score it will be stored in 2 variables, playerScore and computerScore, that will update after every round.

## Lessons Learned:
- how to create and use a function;
- the importance of the Chrome DevTools for debugging;
- how to manipulate the DOM with JavaScript
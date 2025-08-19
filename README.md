# Rock, Papers, Scissors Project
## About the Project
This project was made as part of The Odin Project <a href="https://www.theodinproject.com/lessons/foundations-rock-paper-scissors">curriculum</a>. It is a game of Rock, Paper, Scissors made to be played in the console, for the moment. 

Live demo: https://alinc10.github.io/Rock-Papers-Scissors/

## How It's Made:
Tech used: JavaScript

The project was made following the rules of the game and after the following plan:
- The player is asked to choose an item and the input is stored in a variable. If the player does not choose a valid item, the game will ask again the player to choose, until he will make a valid choice;
- The computer choice will be made using a random number between 1-3, 1 for rock, 2 for paper and 3 for scissors;
- The game will be played in a best of 5 format. If, after the 5 rounds the player and the computer will have the same score, the game will continue until one of them wins.

To create the game I created some functions:
- validItem(playerChoice) - verifies if the player choose Rock, Paper or Scissors.
- getPlayerChoice() - ask the player to choose an item until it choose a valid one;
- getComputerChoice() - creates a random number between 1-3 and it converts in an item for the game, 1=rock, 2=paper, 3=scissors;
- playRound(playerChoice, computerChoice) - it uses the player and computer choices to decide the winner and it return 1 if the player won, 2 if the computer won, 0 if it's a tie and prints a message for the player;

The score it will be stored in 2 variables, playerScore and computerScore, that will update after every round, and after the game it will be showed to the player.

## Lessons Learned:
- how to create and use a function;
- the importance of the Chrome DevTools for debugging;
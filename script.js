/*
    the player is asked to choose an item, the input
    will be stored in a variable. if the player does not choose
    a valid item, the game will ask again the player to choose until
    he will choose a valid item;
    create a function than return a random item
    the value returned will be stored in another variable;
    the 2 values will be compared and it will show a message
    to the player, "You won" or "You lost" and the reason why;
    the game will be played best of 5;
    if, after the 5 rounds it's a draw between the player and
    the computer, the game will be played until one of them
    will win. 
*/

let playerScore = 0;
let computerScore = 0;

function validItem(playerChoice) {
    if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return 1;
    }
    else return 0;
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase().trim();
    if(validItem(playerChoice)) {
        return playerChoice;
    }
    else {
        return getPlayerChoice();
    }
}

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        alert("It's a tie!");
        return 0;
    }
    else if(playerChoice === "rock") {
        if(computerChoice === "scissors") {
            alert("You won! Rock beats Scissors.");
            return 1;
        }
        else {
            alert("You lose! Paper beats Rock.");
            return 2;
        }
    }
    else if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            alert("You won! Paper beats Rock.");
            return 1;
        }
        else {
            alert("You lose! Scissors beats Paper.");
            return 2;
        }
    }
    else if(playerChoice === "scissors") {
        if(computerChoice === "paper") {
            alert("You won! Scissors beats Paper.");
            return 1;
        }
        else {
            alert("You lose! Rock beats Scissors!");
            return 2;
        }
    }
}

for(i = 0; (i < 5 && playerScore < 3 && computerScore < 3) || playerScore === computerScore; i++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    switch(result) {
        case 1: 
            playerScore++;
            break;
        case 2: 
            computerScore++;
            break;
    }
}

alert(`Player score: ${playerScore} \nComputer Score: ${computerScore}`);

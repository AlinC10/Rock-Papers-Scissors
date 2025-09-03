let playerScore = document.querySelector(".player-computer #player-score");
let computerScore = document.querySelector(".player-computer #computer-score");

function getPlayerChoice() {
    let playerChoice = document.querySelector("#selection");
    return playerChoice.addEventListener("click", (e) => e.target.id);
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        chooseOptionsText.textContent = "It's a tie!";
        return 0;
    } else if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            chooseOptionsText.textContent = "You won! Rock beats Scissors.";
            return 1;
        } else {
            chooseOptionsText.textContent = "You lose! Paper beats Rock.";
            return 2;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            chooseOptionsText.textContent = "You won! Paper beats Rock.";
            return 1;
        } else {
            chooseOptionsText.textContent = "You lose! Scissors beats Paper.";
            return 2;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            chooseOptionsText.textContent = "You won! Scissors beats Paper.";
            return 1;
        } else {
            chooseOptionsText.textContent = "You lose! Rock beats Scissors!";
            return 2;
        }
    }
}

let btn = document.querySelector("button");
const selection = document.getElementById("selection");
const chooseOptionsText = document.getElementById("choose-options-text");
let winner = document.getElementById("game-result")

function showWinner() {
    winner.textContent = Number(playerScore.textContent) === 5 ? "You won the game!" : "You lost the game!"
}

selection.addEventListener("click", (e) => {
    if (
        Number(playerScore.textContent) >= 5 ||
        Number(computerScore.textContent) >= 5
    ) {
        return;
    } else {
        let playerChoice = e.target.id;
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        chooseOptionsText.textContent += " Choose again!";
        switch (result) {
            case 1:
                playerScore.textContent = Number(playerScore.textContent) + 1;
                break;
            case 2:
                computerScore.textContent = Number(computerScore.textContent) + 1;
                break;
        }
        if (
            Number(playerScore.textContent) === 5 ||
            Number(computerScore.textContent) === 5
        ) {
            btn.removeAttribute("disabled");
            btn.classList.add("active");
            showWinner();
        }
    }
});

btn.addEventListener("click", () => {
    chooseOptionsText.textContent = "Choose a weapon to begin the game!!!";
    winner.textContent = "";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    btn.setAttribute("disabled", "true");
    btn.classList.remove("active");
});

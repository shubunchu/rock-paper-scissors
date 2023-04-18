function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win! Rock beats scissors.";
        } else {
            return "You lose! Paper beats rock.";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock.";
        } else {
            return "You lose! Scissors beats paper.";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors beats paper.";
        } else {
            return "You lose! Rock beats scissors.";
        }
    }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(`${playerSelection} vs. ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++) {
        let playerSelection = prompt("Make your selection! [rock/paper/scissors]").toLowerCase();
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        console.log(`${playerSelection} vs. ${computerSelection}`);
        console.log(result);
        console.log(`Score: ${playerScore} - ${computerScore}`);
    }
}

game();
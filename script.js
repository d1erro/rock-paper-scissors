function getComputerChoice() {
    const result = Math.floor(Math.random() * 3);
    switch (result) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return "Draw";
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissor") {
        return "You Win! Scissors is crushed by rock";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return "Draw";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissor") {
        return "You Lose! Paper is crushed by scissor";
    }
    if (playerSelection.toLowerCase() == "scissor" && computerSelection == "rock") {
        return "You Lose! Scissors is crushed by rock";
    }
    if (playerSelection.toLowerCase() == "scissor" && computerSelection == "paper") {
        return "You Win! Paper is crushed by scissor";
    }
    if (playerSelection.toLowerCase() == "scissor" && computerSelection == "scissor") {
        return "Draw";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        alert(playRound(prompt("Enter your choice"),getComputerChoice()));
    }
}

game();
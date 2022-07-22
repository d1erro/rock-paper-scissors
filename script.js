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
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return ["Draw", 0];
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return ["You Lose! Paper beats Rock", -1];
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return ["You Win! Scissors is crushed by rock", 1];
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return ["You Win! Paper beats Rock", 1];
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return ["Draw", 0];
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return ["You Lose! Paper is crushed by scissors", -1];
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return ["You Lose! Scissors is crushed by rock", -1];
    }
    if (playerSelection.toLowerCase() == "scissor" && computerSelection == "paper") {
        return ["You Win! Paper is crushed by scissors", 1];
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return ["Draw", 0];
    }
}

let humanScore = 0;
let computerScore = 0;

function updateScore(point) {
    if (point === -1) computerScore += 1;
    else if (point === 1) humanScore += 1;
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}

function printWinner() {
    if (computerScore === 5) {
        alert("Computer Win");
    } else if (humanScore === 5) {
        alert("Human Win");
    }
}

function game() {
        //create and print scoreContainer
        const scoreContainer = document.createElement('div');
        scoreContainer.className = 'scoreContainer';
        scoreContainer.innerText = `Human: ${humanScore} | Computer: ${computerScore}`;
        document.body.append(scoreContainer);

        //create and print buttonContainer (rock, paper, scissors)
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'buttonContainer';
        const buttonRock = document.createElement('button');
        const buttonPaper = document.createElement('button');
        const buttonScissors = document.createElement('button');
        buttonRock.id = 'rock';
        buttonPaper.id = 'paper';
        buttonScissors.id = 'scissors';
        buttonRock.innerText = 'Rock';
        buttonPaper.innerText = 'Paper';
        buttonScissors.innerText = 'Scissors';
        document.body.append(buttonContainer);
        buttonContainer.append(buttonRock);
        buttonContainer.append(buttonPaper);
        buttonContainer.append(buttonScissors);

        //create and print resultContainer
        const resultContainer = document.createElement('div');
        resultContainer.className = 'resultContainer';
        resultContainer.style.textAlign = 'center';
        buttonContainer.after(resultContainer);

        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                let round = playRound(button.id, getComputerChoice());
                resultContainer.innerText = round[0];
                buttonContainer.after(resultContainer);

                if (round[1] === 1 || round [1] === -1) {
                    updateScore(round[1]);
                    scoreContainer.innerText = `Human: ${humanScore} | Computer: ${computerScore}`;
                    scoreContainer.replaceWith(scoreContainer);
                    if (computerScore === 5 || humanScore === 5) {
                        printWinner();
                        resetScore();
                        scoreContainer.innerText = `Human: ${humanScore} | Computer: ${computerScore}`;
                        scoreContainer.replaceWith(scoreContainer);
                        resultContainer.remove();
                    }
                }

            });
        });
}

game();



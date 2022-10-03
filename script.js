const player = document.querySelector('.playerChoice')
const comp = document.querySelector('.compChoice')
const result = document.querySelector('.result')

function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

function getPlayerChoice(input) {
    choice = input;
    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
        let computerSelection = getComputerChoice();
        playerSelection = choice;
        playRound(computerSelection, playerSelection);
    }
}

function playRound(compChoice, playerChoice) {
    player.textContent = `You used the ${playerChoice}`;
    comp.textContent = `Your opponent uses the ${compChoice}`;
    if (playerChoice === compChoice) {
        result.textContent = "You're even, try again !";
        startGame();
    } else if ((playerChoice === "Rock" && compChoice === "Scissors") || (playerChoice === "Paper" && compChoice === "Rock")
    || (playerChoice === "Scissors" && compChoice === "Paper")) {
        result.textContent = "You won this round !";
        startGame();
    } else {
        result.textContent = "Sigh, lost...";
        startGame();
    }
}

function startGame(button) {
    getPlayerChoice(button);
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('button');

rock.addEventListener('click', () => startGame("Rock"));
paper.addEventListener('click', () => startGame("Paper"));
scissors.addEventListener('click', () => startGame("Scissors"));

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.toggle('hoverButton');
    });
});

buttons.forEach(button => {
    button.addEventListener('mouseout', () => {
        button.classList.toggle('hoverButton');
    });
});
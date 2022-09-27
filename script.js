function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

function getPlayerChoice(input) {
    choice = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
        let computerSelection = getComputerChoice();
        playerSelection = choice;
        playRound(computerSelection, playerSelection);
    } else {
        console.log("You need to choose between one of the three choices!");
        startGame();
    }
}

function playRound(compChoice, playerChoice) {
    console.log(`You used the ${playerChoice}`);
    console.log(`Your opponent uses the ${compChoice}`);
    if (playerChoice === compChoice) {
        console.log("You're even! Try again.");
        startGame();
    } else if ((playerChoice === "Rock" && compChoice === "Scissors") || (playerChoice === "Paper" && compChoice === "Rock")
    || (playerChoice === "Scissors" && compChoice === "Rock")) {
        console.log("You won this round!");
        startGame();
    } else {
        console.log("You lost...");
        startGame();
    }
}

function startGame() {
    confirm("Do you want to start a new game?") ? getPlayerChoice(prompt("Rock, Paper or Scissors ?", "")) : console.log("See you soon!");
}

startGame();
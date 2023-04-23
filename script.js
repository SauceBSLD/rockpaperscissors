let yourScore = 0;
let compScore = 0;
let scores;

// On initialise le score total dans le scope global pour éviter les conflits
// On log un message de bienvenue

function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Créer une fonction getComputerChoice
// Initialiser une variable "choix", qui retourne un nombre aléatoire entre 0 et 2
// Utiliser un switch pour qu'à chaque chiffre, un choix différent soit retourné par la fonction

function getPlayerSelection(selection) {
  if (
    selection !== "rock" &&
    selection !== "paper" &&
    selection !== "scissors"
  ) {
    alert("Play by the rules");
    return "ERROR";
  }
  return selection;
}

// Créer une fonction getPlayerSelection qui demande à l'utilisateur son choix
// Initialiser de nouveau une variable choix qui prend la valeur du prompt
// Si la valeur en lowercase est différente des trois choix proposés (rock, paper, scissors)
//  On envoie une alerte pour demander de recommencer l'input
//  On appelle récursivement la fonction getPlayerSelection pour relancer le choix
// Si tout est bon on return la valeur en lowercase

function playRound(player, computer) {
  if (
    (player == "rock" && computer == "paper") ||
    (player == "paper" && computer == "scissors") ||
    (player == "scissors" && computer == "rock")
  ) {
    result.textContent = `Round lost! Computer played ${computer} and you played ${player}`;
    return [0, 1];
  } else if (player == computer) {
    result.textContent = `Round even! You both played ${player}`;
    return [0, 0];
  } else {
    result.textContent = `Round won! You played ${player} and computer played ${computer}`;
    return [1, 0];
  }
}

const gameBtns = document.querySelectorAll(".btn-container>.btn");
const results = document.getElementById("scores");
const result = document.querySelector(".result");
const pScore = document.createElement("p");
const cScore = document.createElement("p");
const div = document.createElement("div");
div.appendChild(pScore);
div.appendChild(cScore);
results.appendChild(div);

const startBtn = document.querySelector(".start");

startBtn.addEventListener("click", () => {
  gameBtns.forEach((button) => {
    button.removeAttribute("disabled");
  });
});

gameBtns.forEach((button) => {
  button.addEventListener("click", () => {
    scores = playRound(getPlayerSelection(button.id), getComputerChoice());
    pScore.textContent = `Your score is ${(yourScore += scores[0])}`;
    cScore.textContent = `Comp score is ${(compScore += scores[1])}`;
    if (yourScore >= 5) {
      alert("YOU WON!");
      yourScore = 0;
      compScore = 0;
      gameBtns.forEach((button) => {
        button.addAttribute("disabled");
      });
    } else if (compScore >= 5) {
      alert("YOU LOST!");
      yourScore = 0;
      compScore = 0;
      gameBtns.forEach((button) => {
        button.addAttribute("disabled");
      });
    }
  });
});

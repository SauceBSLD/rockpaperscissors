let overallScore = 0;

console.log(
  "Welcome to Rock, Paper, Scissors! Please type game(gameAmount, roundAmount) to start playing"
);

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

function getPlayerSelection() {
  choice = prompt("Choose between Rock, Paper or Scissors");
  if (
    choice.toLowerCase() !== "rock" &&
    choice.toLowerCase() !== "paper" &&
    choice.toLowerCase() !== "scissors"
  ) {
    alert("Type a valid input! (Rock, Paper, Scissors)");
    getPlayerSelection();
  }

  return choice.toLowerCase();
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
    console.log(
      `Round lost! Computer played ${computer} and you played ${player}`
    );
    return -1;
  } else if (player == computer) {
    console.log(`Round even! You both played ${player}`);
    return 0;
  } else {
    console.log(
      `Round won! You played ${player} and computer played ${computer}`
    );
    return 1;
  }
}

// Créer une fonction playRound qui sera appelée à chaque tour et prend les choix de chaque joueur en argument
// Pour chaque résultat :
//  On log un message adapté pour le joueur
//  On retourne 1, 0 ou -1 selon le résultat du round

function game(gameAmount, roundAmount) {
  let initialRounds = roundAmount;
  let roundScore = 0;
  let temp = 0;
  if (gameAmount > 0) {
    while (roundAmount > 0) {
      temp = playRound(getPlayerSelection(), getComputerChoice());
      roundAmount--;
      roundScore += temp;
    }
    if (roundScore > 0) {
      overallScore++;
      console.log("You won this game, well played!");
      console.log(`Your overall score: ${overallScore}`);
    } else if (roundScore < 0) {
      overallScore--;
      console.log("You lost this game, try again!");
      console.log(`Your overall score: ${overallScore}`);
    } else {
      console.log("No winner, tie!");
      console.log(`Your overall score: ${overallScore}`);
    }
    gameAmount--;
    game(gameAmount, initialRounds);
  } else {
    if (overallScore > 0) {
      console.log("Good job, you managed to beat the computer!");
      console.log(`Your end score: ${overallScore}`);
    } else if (overallScore < 0) {
      console.log("Terrible gameplay, get better.");
      console.log(`Your end score: ${overallScore}`);
    } else {
      console.log("No winners, boring.");
      console.log(`Your end score: ${overallScore}`);
    }
    overallScore = 0;
  }
}

// Créer la fonction game qui prend le nombre de parties et le nombre de tours/partie en arg
// On stocke le nombre de rounds dans une valeur initialRounds
// On initialise deux valeurs, une pour le score par round et une temporaire
// Si on a un nombre de parties positives
//  Tant que le nombre de rounds est > 0
//    On donne à la valeur temp le résultat de playRound() avec getComputerChoice et getPlayerChoice en argument
//    (getPlayerChoice et getComputerChoice retournent chacun un choix parmis "rock", "paper" et "scissors")
//    (playRound retourne un chiffre entre -1 et 1, selon si le joueur gagne, perds ou égalise)
//    On décrémente roundAmount de 1
//    On ajoute le résultat du round ("temp") au score du round initialisé précedemment
//  Si roundScore > 0
//    On incrémente overallScore
//    On log un message adapté et le score
//  Sinon ...etc
//  On décrémente gameAmount
//  On relance récursivement game() avec gameAmount et notre nombre de rounds initiale
// Sinon (parties <= 0)
// Si overallScore > 0
//  On log un message de fin et le score final
// Sinon si ... etc
// On réinitialise overallScore

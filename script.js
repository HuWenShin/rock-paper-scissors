// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    if ((randomNumber % 3) === 0) {
        return "Rock";
    } else if ((randomNumber % 3) === 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

let scoreCounter = 0;

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (((playerSelection.toLowerCase() === "scissors") && (computerSelection.toLowerCase() === "rock")) || 
    ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "scissors")) ||
    ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "paper"))) {
        return "Too bad you lose :(";
    } else if (((playerSelection.toLowerCase() === "scissors") && (computerSelection.toLowerCase() === "paper")) ||
    ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors")) ||
    ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock"))) {
        scoreCounter += 1;
        return "You win!";
    } else {
        return "It's a tie!";
    }
  }
   

function game() {
    for (i = 0; i < 5; i ++) {
        let playerChoice = prompt("Make a choice! Rock, paper, or scissors?");
        while (((playerChoice.toLowerCase() != "paper") &&
        (playerChoice.toLowerCase() != "rock") &&
        (playerChoice.toLowerCase() != "scissors"))) {
            playerChoice = prompt("Enter a valid option. Rock, paper, or scissors?")
            console.log(playerChoice);
        }
        
        let computerChoice = getComputerChoice();
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(playRound(playerChoice, computerChoice));
    }
    console.log("Your score: " + scoreCounter + "/5");
    if (scoreCounter >= 3) {
        console.log("You won the game!")
    } else {
        console.log("Try harder next time.")
    }
}

game();
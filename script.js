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
    if (((playerSelection === "Scissors") && (computerSelection === "Rock")) || 
    ((playerSelection === "Paper") && (computerSelection === "Scissors")) ||
    ((playerSelection === "Rock") && (computerSelection === "Paper"))) {
        return "Too bad you lose :(";
    } else if (((playerSelection === "Scissors") && (computerSelection === "Paper")) ||
    ((playerSelection === "Rock") && (computerSelection === "Scissors")) ||
    ((playerSelection === "Paper") && (computerSelection === "Rock"))) {
        scoreCounter += 1;
        return "You win!";
    } else {
        return "It's a tie!";
    }
  }
   
const button = document.querySelectorAll("button");
button.forEach(btn.addEventListener("click", function() {
    playRound(button.value)
}));



// function game() {
//     for (i = 0; i < 5; i ++) {
//         let playerChoice = c;
        
//         let computerChoice = getComputerChoice();
//         console.log(playerChoice);
//         console.log(computerChoice);
//         console.log(playRound(playerChoice, computerChoice));
//     }
//     console.log("Your score: " + scoreCounter + "/5");
//     if (scoreCounter >= 3) {
//         console.log("You won the game!")
//     } else {
//         console.log("Try harder next time.")
//     }
// }

// game();
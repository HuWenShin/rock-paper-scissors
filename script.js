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

let pScore = 0;
let cScore = 0;

function playRound(playerSelection, computerSelection) {
    if (((playerSelection === "Scissors") && (computerSelection === "Rock")) || 
    ((playerSelection === "Paper") && (computerSelection === "Scissors")) ||
    ((playerSelection === "Rock") && (computerSelection === "Paper"))) {
        cScore += 1;
        display_text = "Too bad you lose :(";
        display(playerSelection, computerSelection, display_text, pScore, cScore);
    } else if (((playerSelection === "Scissors") && (computerSelection === "Paper")) ||
    ((playerSelection === "Rock") && (computerSelection === "Scissors")) ||
    ((playerSelection === "Paper") && (computerSelection === "Rock"))) {
        pScore += 1;
        display_text = "You win!";
        display(playerSelection, computerSelection, display_text, pScore, cScore);
    } else {
        display_text = "It's a tie, try again.";
        display(playerSelection, computerSelection, display_text, pScore, cScore);
    }

    if (pScore === 5) {
        message = "You won the game! Refresh page to start new game.";
        endgame("", "", message);
    } else if (cScore === 5) {
        message = "You lost the game. Refresh page to start new game.";
        endgame("", "", message);
    }
}

function display(pSel, cSel, txt, pSc, cSc) {
    document.getElementById("playerChoice").innerText = "You chose " + pSel;
    document.getElementById("compChoice").innerText = "Computer chose " + cSel;
    document.getElementById("result").innerText = txt;
    document.getElementById("playerScore").innerText = "Player Score: " + pSc;
    document.getElementById("compScore").innerText = "Computer Score: " + cSc;
}
   
const button = document.querySelectorAll("button");

function endgame(p, c, msg) {
    document.getElementById("playerChoice").innerText = p;
    document.getElementById("compChoice").innerText = c;
    document.getElementById("result").innerText = msg;
    button.forEach(btn => {btn.disabled = true});
}

button.forEach(btn => {btn.addEventListener("click", function() {
    playRound(event.target.innerText, getComputerChoice());
    })
});
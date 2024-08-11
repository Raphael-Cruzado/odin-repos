function getComputerChoice() {
    randomNumber = Math.random() * 100

    if (randomNumber < 33) {
        return "rock";
    } else if (randomNumber < 66) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice;

    for (;;) { // Infinite loop
        choice = prompt("Please enter rock, paper, or scissor");
        choice = choice.toLowerCase();

        if (choice === "rock" || choice === "paper" || choice === "scissor") {
            return choice;
        } else {
            alert("Invalid, only rock, paper, or scissors allowed");
        }
    }
}

/*
FUNCTION playRound(humanChoice, computerChoice):
    // this function takes both human and computer choices and compares them
    a) compare both choices
    b) increment global variable depending on winner
*/

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissor") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissor" && computerChoice == "rock")) {
        humanScore += 1;
    } else if (humanChoice == computerChoice) {
        console.log("it's a tie!")
    } else {
        computerScore +=1;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("you chose: ", humanSelection);
console.log("computer chose: ", computerSelection);
console.log("you: ", humanScore);
console.log("computer: ", computerScore);

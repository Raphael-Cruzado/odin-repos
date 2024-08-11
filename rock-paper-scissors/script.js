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

    for (;;) {
        choice = prompt("Please enter rock, paper, or scissor");
        choice = choice.toLowerCase();

        if (choice === "rock" || choice === "paper" || choice === "scissor") {
            return choice;
        } else {
            alert("Invalid, only rock, paper, or scissors allowed");
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 1; i < 6; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        if ((humanChoice == "rock" && computerChoice == "scissor") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissor" && computerChoice == "rock")) {
            humanScore += 1;
            console.log("you chose: ", humanChoice);
            console.log("computer chose: ", computerChoice);
            console.log("you: ", humanScore);
            console.log("computer: ", computerScore);
            console.log("-----------------------------------")
        } else if (humanChoice == computerChoice) {
            console.log("you chose: ", humanChoice);
            console.log("computer chose: ", computerChoice);
            console.log("you: ", humanScore);
            console.log("computer: ", computerScore);
            console.log("-----------------------------------")
        } else {
            computerScore +=1;
            console.log("you chose: ", humanChoice);
            console.log("computer chose: ", computerChoice);
            console.log("you: ", humanScore);
            console.log("computer: ", computerScore);
            console.log("-----------------------------------")
        }
    }
}

playGame();

if (humanScore > computerScore) {
    alert("you won!")
} else if (computerScore > humanScore) {
    alert("the computer won :( refresh page to play again")
} else {
    alert("it's a Draw !! refresh page to play again")
}
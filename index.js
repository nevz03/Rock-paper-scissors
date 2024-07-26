let humanScore = 0;
let computerScore = 0;

function getComputerChoice() { // create function
  let threeChoices = ["rock", "paper", "scissors"]; // create rock paper scissors variables
  let randomChoice = Math.floor(Math.random() * 3); // create random variable 
  
  return threeChoices[randomChoice]; // simplified return statement
}

function getHumanChoice() { // create function
  let question = prompt("rock, paper or scissors?").toLowerCase(); // create prompt with variable
  let userChoice = ["rock", "paper", "scissors"]; // create rock paper scissors variables
  
  // Ensure the user's choice is valid
  if (userChoice.includes(question)) {
    return question; // return the valid user's choice
  } else {
    // Return a default value if the input is invalid
    return "rock"; // default to "rock" or handle as desired
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
    console.log("You win!");
    humanScore++;
    console.log("Human score is: " + humanScore);
  } else {
    console.log("You lose!");
    computerScore++;
    console.log("Computer score is: " + computerScore);
  }
}

function playGame() {
  for (let fiveRounds = 0; fiveRounds < 5; fiveRounds++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // Display final scores and declare the winner
  console.log("Game over!");
  console.log("Final Scores:");
  console.log("Human score: " + humanScore);
  console.log("Computer score: " + computerScore);

  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, the computer wins this time!");
  } else {
    console.log("It's a tie overall!");
  }
}

playGame()
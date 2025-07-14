// rock paper scissor

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
};

const getHumanChoice = () => {
  let choice = prompt("Please enter your choice: ");
  return choice;
};

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();

  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissor"
  ) {
    alert("Invalid input! Please choose rock, paper, or scissor.");
    return "Invalid Input!";
  }

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins";
  }
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    alert(`Round ${i + 1}: ${result}`);

    if (result === "You win!") {
      humanScore++;
    } else if (result === "Computer wins") {
      computerScore++;
    }
  }

  if (humanScore > computerScore) {
    alert("You win the game!");
  } else if (computerScore > humanScore) {
    alert("Computer wins the game!");
  } else {
    alert("It's a tie!");
  }
};

playGame();

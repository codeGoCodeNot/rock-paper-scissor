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

const playRound = (humanChoice, computerChoice) => {
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

const result = document.querySelector("#result");
const score = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const buttons = document.querySelectorAll(".button-container button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (gameOver) {
      playerScore = 0;
      computerScore = 0;
      result.textContent = "";
      score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
      gameOver = false;
      return;
    }

    const humanChoice = button.id;
    const computerChoice = getComputerChoice();

    const roundResult = playRound(humanChoice, computerChoice);
    updateResult(roundResult);
  });
});

const updateResult = (roundResult) => {
  if (roundResult === "You win!") {
    playerScore++;
  } else if (roundResult === "Computer wins") {
    computerScore++;
  }

  result.textContent = roundResult;
  score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    const finalWinner = playerScore === 5 ? "Player" : "Computer";
    result.textContent = `${finalWinner} wins the game!`;
    gameOver = true;
  }
};

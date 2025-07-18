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
  humanChoice = humanChoice.trim().toLowerCase();

  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissor"
  ) {
    alert("Invalid input! Please choose rock, paper, or scissor.");
    return "Invalid input!";
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

const result = document.querySelector("#result");
const score = document.querySelector("#score");

const buttons = document.querySelectorAll(".button-container button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.id;
    console.log("Player Choice:", choice);
  });
});

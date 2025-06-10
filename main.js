const btn_list = document.querySelectorAll(".btn");
const noti_player = document.querySelector(".noti_player");
const noti_computer = document.querySelector(".noti_computer");
const result_noti = document.querySelector(".result-noti");
const player_score = document.querySelector(".player-score");
const computer_score = document.querySelector(".computer-score");

const choices = ["Rock", "Scissors", "Paper"];
let playerScore = 0;
let computerScore = 0;
function Choose(playerChoice) {
  result_noti.classList.remove("win");
  result_noti.classList.remove("lose");
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  noti_computer.textContent = `Computer: ${computerChoice}`;
  let result = "";
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "Rock":
        result = computerChoice === "Scissors" ? "YOU WIN" : "YOU LOSE";
        break;
      case "Scissors":
        result = computerChoice === "Paper" ? "YOU WIN" : "YOU LOSE";
        break;
      case "Paper":
        result = computerChoice === "Rock" ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }
  noti_player.textContent = `Player: ${playerChoice}`;
  result_noti.textContent = result;
  if (result === "YOU WIN") {
    result_noti.classList.add("win");
    playerScore++;
  } else if (result === "YOU LOSE") {
    result_noti.classList.add("lose");
    computerScore++;
  }
  player_score.textContent = `Player Score: ${playerScore}`;
  computer_score.textContent = `Computer Score: ${computerScore}`;
}

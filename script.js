// Rules:
// Rock beats scissors (the rock smashes or blunts the scissors).
// Scissors beats paper (the scissors cut the paper).
// Paper beats rock (the paper covers the rock).

let option = {
  1: "rock",
  2: "paper",
  3: "scissors",
};

let playerscore = 0;
let computerscore = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  return option[randomNumber];
}

let btnOptions = document.querySelectorAll(".game-btn");
btnOptions.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let computerSelection = computerPlay();
    let playerSelection = btn.id;
    if (playerSelection === computerSelection) {
      document.querySelector("#winner-label").innerText = "Its a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      playerscore++;
      document.querySelector("#winner-label").innerText = "You win!";
    } else {
      computerscore++;
      document.querySelector("#winner-label").innerText = "You lose!";
    }
    PrintResult();
    checkWinner();
  });
});

function checkWinner() {
  if (playerscore === 5 || computerscore === 5) {
    if (playerscore > computerscore) {
      document.querySelector("#p-pop-msg").innerText = "You win!";
    } else {
      document.querySelector("#p-pop-msg").innerText = "You lose!";
    }
    showPopup();
  }
}

btnReset = document.querySelector("#reset-button");
btnReset.addEventListener("click", (e) => {
  funcBtnReset();
});

function funcBtnReset() {
  document.querySelector("#user-score").innerText = "0";
  document.querySelector("#computer-score").innerText = "0";
  playerscore = 0;
  computerscore = 0;
  playerSelection = "";
  computerSelection = "";
  document.querySelector("#winner-label").innerText = "Who will win?";
}

function PrintResult() {
  document.querySelector("#user-score").innerText = playerscore;
  document.querySelector("#computer-score").innerText = computerscore;
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  funcBtnReset();
}

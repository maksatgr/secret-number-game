"use stirct";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("Oh no, it is empty");
  } else if (guess === secretNumber) {
    displayMessage("😎 Congratulations WELL DONE!!!");
    document.querySelector(".numberr").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".numberr").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "😮 Too High" : "🫤 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🎃 You lost");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }

  /*
  if (guess === secretNumber - 1) {
    displayMessage("🤏 Near, but low");
  }
  if (guess < secretNumber - 1) {
    displayMessage("🫤 Too Low");
  }

  if (guess > secretNumber) {
    displayMessage("😮 Too Big");
  }
  if (guess === secretNumber + 1) {
    displayMessage("🤏 Near, but high");
  }
 */
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("🫣 Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".numberr").textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guess").value = " ";
});

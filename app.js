let randomNumber = Math.floor(Math.random() * 20) + 1;

let score = 10;
let highscore = 0;

document.querySelector(".number").textContent = "?";
const counter = document.querySelector(".counter");
const message = (message) =>
  (document.querySelector(".message").textContent = message);

let count = 0;

function updateCount() {
  counter.textContent = count;
}

const increment = document
  .getElementById("increment")
  .addEventListener("click", function () {
    count++;
    updateCount();
  });
const decrement = document
  .getElementById("decrement")
  .addEventListener("click", function () {
    if (count > 0) {
      count--;
    }
    updateCount();
  });

document.querySelector(".active").addEventListener("click", function () {
  let guess = parseInt(document.querySelector(".counter").textContent);

  if (guess !== randomNumber) {
    if (score > 1) {
      message(guess > randomNumber ? "Too High!" : "Too Low...");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      message("Game Over!!");
    }
  } else if (guess === randomNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = randomNumber;
    message("Good Job!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.body.style.backgroundColor = "#262626";
  message("Start Guessing...");
  score = 10;
  count = 0;
  document.querySelector(".counter").textContent = count;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  randomNumber = Math.floor(Math.random() * 20) + 1;
});

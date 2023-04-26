"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // Uživatel nezadal číslo
  if (!guess) {
    displayMessage("Nezadal jste číslo");

    // Hráč vyhrál
  } else if (guess === secretNumber) {
    // Dá se také zapsat jako --> document.querySelector(".message").textContent = "Správné číslo"
    displayMessage("Správné číslo");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //Pokud je to špatně
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Číslo je příliš velké" : "Číslo je příliš malé";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Prohrál jsi");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Začni hádat");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#19376d";
  document.querySelector(".number").style.width = "15rem";
});

// Michal Dostal 2023


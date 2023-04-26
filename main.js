"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // Uživatel nezadal číslo
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";

    // Hráč vyhrál
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Správné číslo";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    // Číslo je příliš velké
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Číslo je příliš velké";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Prohrál jsi";
      document.querySelector(".score").textContent = 0;
    }

    //Číslo je příliš malé
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Číslo je příliš malé";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Prohrál jsi";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Začni hádat";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//Michal Dostal 2023

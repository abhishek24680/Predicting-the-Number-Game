"use strict";
let hiddenNo = Math.trunc(Math.random() * 25) + 1;
let score = 10;
let highscore = 0;
//printing messsage function
const predictMessage = function (print) {
  document.querySelector(".predict").textContent = print;
};
//game functionality
document.querySelector(".check").addEventListener("click", function () {
  const checkBoxNo = Number(document.querySelector(".guess").value);
  if (!checkBoxNo) {
    predictMessage("You have not entered any Number ❌");
  }
  //when you win
  else if (checkBoxNo === hiddenNo) {
    predictMessage("Correct Number 🎊");
    document.querySelector(".questionMark").textContent = "✔" + hiddenNo;
    document.querySelector(".questionMark").style.backgroundColor = "red";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("header").style.backgroundColor = "#60b347";
    document.querySelector("footer").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".top-score").textContent = highscore;
    }
  } else if (checkBoxNo !== hiddenNo) {
    if (score > 1) {
      predictMessage(checkBoxNo > hiddenNo ? "The number you guessed is Too High 📈" : "The number you guessed is Too Low 📉");
      score--;
      document.querySelector(".ank").textContent = score;
    }
    else {
      predictMessage("You lost the Game 👎");
      document.querySelector(".ank").textContent = 0;
      document.querySelector(".questionMark").textContent = "✔" + hiddenNo;
      document.querySelector(".questionMark").style.backgroundColor = "green";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector("header").style.backgroundColor = "red";
      document.querySelector("footer").style.backgroundColor = "red";
    }
  }
});
//restart the game
document.querySelector(".btn").addEventListener("click", function () {
  score = 10;
  hiddenNo = Math.trunc(Math.random() * 25) + 1;
  predictMessage("Start Predicting Numbers...");
  document.querySelector(".ank").textContent = score;
  document.querySelector(".questionMark").textContent = "🤔?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#2f4468";
  document.querySelector(".questionMark").style.backgroundColor = "white";
  document.querySelector("header").style.backgroundColor = "rgb(255, 187, 61)";
  document.querySelector("footer").style.backgroundColor = "rgb(255, 187, 61)";
});
//button open and close features
const content = document.querySelector(".content");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close");
const btnOpen = document.querySelector(".instructions");
//function to open the tab
const openTab = function () {
  content.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
//function to close the tab
const closeTab = function () {
  content.classList.add("hidden");
  overlay.classList.add("hidden");
}
btnOpen.addEventListener("click", openTab);
btnClose.addEventListener("click", closeTab);
overlay.addEventListener("click", closeTab);
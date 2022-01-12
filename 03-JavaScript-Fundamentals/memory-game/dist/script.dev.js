"use strict";

var _this = void 0;

// -----------------------------------------------------------------------------
// SELECTING DOM ELEMENTS
// -----------------------------------------------------------------------------
// selecting moves counter
var movesCounter = document.querySelector(".moves"); // selecting timer counter

var timerCounter = document.querySelector(".timer"); // restart game button

var restartBtn = document.querySelector(".restart"); // selecting the grid container

var gridContainer = document.querySelector(".grid__container");
var moves = 0;
var minutes = 0;
var seconds = 0; // let createDiv;

var firstCardSelected;
var secondCardSelected; // Need to store the images inside a data structure

var cardsArr = [{
  name: "aries",
  img: "images/aries.svg",
  className: "card"
}, {
  name: "aries",
  img: "images/aries.svg",
  className: "card"
}, {
  name: "taurus",
  img: "images/taurus.svg",
  className: "card"
}, {
  name: "taurus",
  img: "images/taurus.svg",
  className: "card"
}, {
  name: "gemini",
  img: "images/gemini.svg",
  className: "card"
}, {
  name: "gemini",
  img: "images/gemini.svg",
  className: "card"
}, {
  name: "cancer",
  img: "images/cancer.svg",
  className: "card"
}, {
  name: "cancer",
  img: "images/cancer.svg",
  className: "card"
}, {
  name: "leo",
  img: "images/leo.svg",
  className: "card"
}, {
  name: "leo",
  img: "images/leo.svg",
  className: "card"
}, {
  name: "virgo",
  img: "images/virgo.svg",
  className: "card"
}, {
  name: "virgo",
  img: "images/virgo.svg",
  className: "card"
}, {
  name: "libra",
  img: "images/libra.svg",
  className: "card"
}, {
  name: "libra",
  img: "images/libra.svg",
  className: "card"
}, {
  name: "scorpio",
  img: "images/scorpio.svg",
  className: "card"
}, {
  name: "scorpio",
  img: "images/scorpio.svg",
  className: "card"
}, {
  name: "sagittarius",
  img: "images/sagittarius.svg",
  className: "card"
}, {
  name: "sagittarius",
  img: "images/sagittarius.svg",
  className: "card"
}, {
  name: "capricorn",
  img: "images/capricorn.svg",
  className: "card"
}, {
  name: "capricorn",
  img: "images/capricorn.svg",
  className: "card"
}, {
  name: "aquarius",
  img: "images/aquarius.svg",
  className: "card"
}, {
  name: "aquarius",
  img: "images/aquarius.svg",
  className: "card"
}, {
  name: "pisces",
  img: "images/pisces.svg",
  className: "card"
}, {
  name: "pisces",
  img: "images/pisces.svg",
  className: "card"
}, {
  name: "central",
  img: "images/central-img.svg",
  className: "central"
}];
var cardsChosen = [];
var cardsMatched = []; // -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------
//on page load - randomise it & on restart game

document.addEventListener('DOMContentLoaded', function () {
  var randomiseCards = cardsArr.sort(function () {
    return 0.5 - Math.random();
  });
});

var createBoard = function createBoard() {
  cardsArr.forEach(function (card) {
    var createDiv = document.createElement("div");
    var createImg = document.createElement("img");
    createImg.src = "".concat(card.img);
    createDiv.appendChild(createImg); //add img to div

    gridContainer.appendChild(createDiv); //add div to grid container
    // default - hide images
    // createDiv.classList.toggle("hidden");
    // createDiv.classList.add("hidden");

    createDiv.addEventListener('click', clickOutcome);
  });
}; // cardsArr.filter
// if (cardsMatched.length === cardsArr.length/2) {
//   alert("Congratulation! You've found all matching pairs.")


var displayCard = function displayCard() {
  _this.classList.add("visible");

  _this.classList.add("hidden");
};

var checkForMatch = function checkForMatch() {
  var cards = document.querySelectorAll('img');
  var cardOptionOne = cardsChosen[0];
  var cardOptionTwo = cardsChosen[1];
  cards.addEventListener('click', displayCard);
}; // img.addEventListener('click', () => {
//   if(cards.style.display === 'none') {
//     cards.style.display = 'block';
// } else {
// cards.style.display = 'none';
// }
// });


function clickOutcome() {
  // createDiv.classList.add("visible")
  calculateMoves();
} // SHUFFLE CARD FUNCTION
// I want the card selected to be random -> generate random number
// assign cardsArr a new random index
// move the cards in a random fashion on the board
// const shuffleCards = () => {
// restartBtn.addEventListener("click", () => {


var randomiseCards = cardsArr.sort(function () {
  return 0.5 - Math.random();
}); // console.log(randomiseCards)
// });
// CALCULATE MOVES FUNCTION
// this tracks the moves the user takes and starts the timer
// increments by 1 every time user clicks on a card
// updates the innerhtml of the calculateMoves Counter

var calculateMoves = function calculateMoves() {
  moves++;
  movesCounter.innerHTML = "".concat(moves, " Move(s)");

  if (moves == 1) {
    seconds = 0;
    minutes = 0;
    startTimer();
  }
}; // START TIMER FUNCTION
// timer function
// keeps track of how long the user has been playing
// once the user makes the first move, start the timer
// increment second and minute timers
// once all pairs have been matched, game ends and timer stops
// do i display this in a pop up? or update the instruction section to say congrats / time elapsed / moves taken

/* FIRST ATTEMPT */


var timerId;

var startTimer = function startTimer() {
  timerId = setInterval(function () {
    timerCounter.innerHTML = "".concat(minutes, " Mins ").concat(seconds, " Secs");
    seconds++;

    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
  }, 1000);
}; // STOP/RESET TIMER
// this needs to be invoked on both matching all cards - stop timer
// and invoked when user clicks 'Reset Game' btn


var resetTimer = function resetTimer() {
  timerCounter.innerHTML = "0 Mins 0 Secs";
  seconds = 0;
  minutes = 0;
  moves = 0;
  movesCounter.innerHTML = "0 Move(s)";
  clearInterval(timerId);
  /* TO ADD TO RESET BTN FUNCTION
  SHUFFLE CARDS
  RESET BOARD STYLING
   */
};

restartBtn.addEventListener("click", resetTimer);
createBoard();
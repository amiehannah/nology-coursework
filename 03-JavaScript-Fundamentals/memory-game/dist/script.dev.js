"use strict";

//PSEUDOCODE
// at the start of the game the cards values are hidden
// game begins when user clicks on a card
// movesCounter function is activated upon the first click and keep track of each move the user makes - Y
// timer function is also activated upon the first click - Y
// first card is selected, then second card is selected
// these are compared to see if they match - if they match cards remain visible, if no match is found, they remain hidden until it's matching pair is found
// FLIP ANIMATION
// once all pairs have been matched, game ends and timer stops
// to restart the game - user clicks on restart game button
// this hides all the cards again
// this shuffles the images 
// this returns moveCounter and timer functions to zero so the game can start again - Y
// on clicking a card, need to change styling and reveal what is on the reverse
// needs to check the subsequent card selected by the user
// if these two cards match
// styling changes so that they are remain visible - face side up
// then card checking function runs again
// checking first card then checking second card and repeat in this fashion
// until all matching pairs have been found
// -----------------------------------------------------------------------------
// SELECTING DOM ELEMENTS
// -----------------------------------------------------------------------------
// selecting moves counter
var movesCounter = document.querySelector(".moves"); // selecting timer counter

var timerCounter = document.querySelector(".timer"); // restart game button

var restartBtn = document.querySelector(".restart"); // const gridContainer = document.querySelector(".grid__container")
// do i need this?

var moves = 0;
var minutes = 0;
var seconds = 0; // Need to store the images inside a data structure
// store cards images in an array
// or would it be better to put it in an object
// const cardsArr = [
//   "./images/aries.svg",
//   "./images/taurus.svg",
//   "./images/gemini.svg",
//   "./images/cancer.svg",
//   "./images/leo.svg",
//   "./images/virgo.svg",
//   "./images/libra.svg",
//   "./images/scorpio.svg",
//   "./images/sagittarius.svg",
//   "./images/capricorn.svg",
//   "./images/aquarius.svg",
//   "./images/pisces.svg",
//   "./images/aries.svg",
//   "./images/taurus.svg",
//   "./images/gemini.svg",
//   "./images/cancer.svg",
//   "./images/leo.svg",
//   "./images/virgo.svg",
//   "./images/libra.svg",
//   "./images/scorpio.svg",
//   "./images/sagittarius.svg",
//   "./images/capricorn.svg",
//   "./images/aquarius.svg",
//   "./images/pisces.svg",
// ];

var cardsArr = [{
  name: "aries",
  img: "images/aries.svg"
}, {
  name: "aries",
  img: "images/aries.svg"
}, {
  name: "taurus",
  img: "images/taurus.svg"
}, {
  name: "taurus",
  img: "images/taurus.svg"
}, {
  name: "gemini",
  img: "images/gemini.svg"
}, {
  name: "gemini",
  img: "images/gemini.svg"
}, {
  name: "cancer",
  img: "images/cancer.svg"
}, {
  name: "cancer",
  img: "images/cancer.svg"
}, {
  name: "leo",
  img: "images/leo.svg"
}, {
  name: "leo",
  img: "images/leo.svg"
}, {
  name: "virgo",
  img: "images/virgo.svg"
}, {
  name: "virgo",
  img: "images/virgo.svg"
}, {
  name: "libra",
  img: "images/libra.svg"
}, {
  name: "libra",
  img: "images/libra.svg"
}, {
  name: "scorpio",
  img: "images/scorpio.svg"
}, {
  name: "scorpio",
  img: "images/scorpio.svg"
}, {
  name: "sagittarius",
  img: "images/sagittarius.svg"
}, {
  name: "sagittarius",
  img: "images/sagittarius.svg"
}, {
  name: "capricorn",
  img: "images/capricorn.svg"
}, {
  name: "capricorn",
  img: "images/capricorn.svg"
}, {
  name: "aquarius",
  img: "images/aquarius.svg"
}, {
  name: "aquarius",
  img: "images/aquarius.svg"
}, {
  name: "pisces",
  img: "images/pisces.svg"
}, {
  name: "pisces",
  img: "images/pisces.svg"
}]; // console.log(cardsArr.length)
// -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------

var cards = document.querySelectorAll('.card'); //produces a nodelist

cards.forEach(function (card) {
  card.addEventListener('click', clickOutcome);
});

function clickOutcome() {
  // alert('I have been clicked!')
  calculateMoves();
} // SHUFFLE CARD FUNCTION


for (var i = 0; i < cardsArr.length; i++) {
  console.log(cardsArr[i]); //print each card to the console [i] every index;
  // cardsArr[i].style = "display: none";

  var randomNumber = Math.floor(Math.random() * cardsArr.length);
  console.log(randomNumber);
  cardsArr[i] = [randomNumber]; // append each zodiac element to the grid
} // SHUFFLE CARDS
// I want the card selected to be random
// generate random number
// assign cardsArr a new random index
// move the cards in a random fashion on the board
//
// const shuffleCards = () => {
//   const randomNumber = Math.floor(Math.random() * cardsArr.length);
// }
//   cards.style.backgroundImage = `url(${cardsArr[randomNumber][1]})`
//   //the element we want to change = [randomNumber][]
//   // cardSelected.style.backgroundImage = [randomNumber][0];
// };
// shuffleCards();
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
  clearInterval(timerId); // reset the board styling
  // shuffles position of cards - using math.random?
};

restartBtn.addEventListener("click", resetTimer); // cardsArr[0].classList.toggle(".hidden")
// cards.addEventListener('click', () => {
//   if(cards.style.display === 'none') {
//     cards.style.display = 'block';
// } else {
// cards.style.display = 'none';
// }
// });
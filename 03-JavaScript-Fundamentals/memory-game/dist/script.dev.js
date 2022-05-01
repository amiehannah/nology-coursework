"use strict";

// -----------------------------------------------------------------------------
// SELECTING DOM ELEMENTS
// -----------------------------------------------------------------------------
var movesCounter = document.querySelector(".moves"); // selecting moves counter

var timerCounter = document.querySelector(".timer"); // selecting timer counter

var restartBtn = document.querySelector(".restart"); // restart game button

var gridContainer = document.querySelector(".grid__container"); // selecting the grid container

var moves = 0;
var minutes = 0;
var seconds = 0;
var imageElement;
var divElement; // Need to store the images inside a data structure

var cardsArr = [{
  name: "aries",
  img: "images/aries.svg",
  className: "card",
  id: 0
}, {
  name: "aries",
  img: "images/aries.svg",
  className: "card",
  id: 0
}, {
  name: "taurus",
  img: "images/taurus.svg",
  className: "card",
  id: 1
}, {
  name: "taurus",
  img: "images/taurus.svg",
  className: "card",
  id: 1
}, {
  name: "gemini",
  img: "images/gemini.svg",
  className: "card",
  id: 2
}, {
  name: "gemini",
  img: "images/gemini.svg",
  className: "card",
  id: 2
}, {
  name: "cancer",
  img: "images/cancer.svg",
  className: "card",
  id: 3
}, {
  name: "cancer",
  img: "images/cancer.svg",
  className: "card",
  id: 3
}, {
  name: "leo",
  img: "images/leo.svg",
  className: "card",
  id: 4
}, {
  name: "leo",
  img: "images/leo.svg",
  className: "card",
  id: 4
}, {
  name: "virgo",
  img: "images/virgo.svg",
  className: "card",
  id: 5
}, {
  name: "virgo",
  img: "images/virgo.svg",
  className: "card",
  id: 5
}, {
  name: "libra",
  img: "images/libra.svg",
  className: "card",
  id: 6
}, {
  name: "libra",
  img: "images/libra.svg",
  className: "card",
  id: 6
}, {
  name: "scorpio",
  img: "images/scorpio.svg",
  className: "card",
  id: 7
}, {
  name: "scorpio",
  img: "images/scorpio.svg",
  className: "card",
  id: 7
}, {
  name: "sagittarius",
  img: "images/sagittarius.svg",
  className: "card",
  id: 8
}, {
  name: "sagittarius",
  img: "images/sagittarius.svg",
  className: "card",
  id: 8
}, {
  name: "capricorn",
  img: "images/capricorn.svg",
  className: "card",
  id: 9
}, {
  name: "capricorn",
  img: "images/capricorn.svg",
  className: "card",
  id: 9
}, {
  name: "aquarius",
  img: "images/aquarius.svg",
  className: "card",
  id: 10
}, {
  name: "aquarius",
  img: "images/aquarius.svg",
  className: "card",
  id: 10
}, {
  name: "pisces",
  img: "images/pisces.svg",
  className: "card",
  id: 11
}, {
  name: "pisces",
  img: "images/pisces.svg",
  className: "card",
  id: 11
}, {
  name: "central",
  img: "images/central-img.svg",
  className: "central",
  id: 12
}];
var matchedCard = document.getElementsByClassName("matched"); // add a class for matched

var cardsMatched = []; // new cardsArr is created to store matching pairs
// -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------
//on page load - randomise it & on restart game

document.addEventListener("DOMContentLoaded", function () {
  shuffleCards(cardsArr);
}); // SHUFFLE CARD FUNCTION
// I want the card selected to be random -> generate random number
// assign cardsArr a new random index
// move the cards in a random fashion on the board

var shuffleCards = function shuffleCards(array) {
  var randomiseCards = array.sort(function () {
    return 0.5 - Math.random();
  });
  return randomiseCards;
};

var createBoard = function createBoard() {
  var shuffledCards = shuffleCards(cardsArr);
  shuffledCards.forEach(function (card) {
    var divElement = document.createElement("div");
    var imageElement = document.createElement("img");
    imageElement.src = "".concat(card.img);
    imageElement.setAttribute("class", "card");
    divElement.appendChild(imageElement); //add img to div

    gridContainer.appendChild(divElement); //add div to grid container

    divElement.addEventListener("click", clickOutcome);
    divElement.addEventListener("click", function () {
      checkForMatch(divElement, card); // displayCards()
    });
  }); // Listen out for the click on the card
  //  push that card into the cards chosen cardsArr
  // Listen out for the next click on the card and push that into the cards chosen cardsArr

  var cardsChosen = []; //CHECK FOR MATCH FUNCTION

  var checkForMatch = function checkForMatch(cardHTML, cardPicked) {
    cardsChosen.push(cardPicked); // console.log(cardsChosen);

    if (cardsChosen.length < 2) {
      return;
    }

    if (cardsChosen[0].id === cardsChosen[1].id) {
      console.log("cards match");
      cardsMatched.push(cardsChosen[0], cardsChosen[1]);
      cardsChosen = [];
      console.log(cardsMatched); // cardHTML.classList.add("")
      // cardsMatched
    }

    if (cardsMatched.length === 24) {
      console.log("you've won the game");
    }
  };

  function clickOutcome() {
    calculateMoves();
  } // CALCULATE MOVES FUNCTION
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
    clearInterval(timerId); // cards.classList.add("hidden"); //why won't this work?
    // imageElement.classList.add("hidden");

    /* TO ADD TO RESET BTN FUNCTION
      SHUFFLE CARDS
      RESET BOARD STYLING
    */
  };

  var removeBoard = function removeBoard() {
    gridContainer.innerHTML = "";
  };

  restartBtn.addEventListener("click", function () {
    resetTimer();
    removeBoard();
    createBoard(); // cards.classList.add("hidden");
    // divElement.classList.add("hidden");
  });
  createBoard(); // original position of createboard
};
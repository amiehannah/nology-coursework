"use strict";

var cardArray = [{
  name: "aries",
  img: "images/aries.png"
}, {
  name: "aries",
  img: "images/aries.png"
}, {
  name: "taurus",
  img: "images/taurus.png"
}, {
  name: "taurus",
  img: "images/taurus.png"
}, {
  name: "gemini",
  img: "images/gemini.png"
}, {
  name: "gemini",
  img: "images/gemini.png"
}, {
  name: "cancer",
  img: "images/cancer.png"
}, {
  name: "cancer",
  img: "images/cancer.png"
}, {
  name: "leo",
  img: "images/leo.png"
}, {
  name: "leo",
  img: "images/leo.png"
}, {
  name: "aquarius",
  img: "images/aquarius.png"
}, {
  name: "aquarius",
  img: "images/aquarius.png"
}, {
  name: "libra",
  img: "images/libra.png"
}, {
  name: "libra",
  img: "images/libra.png"
}, {
  name: "pisces",
  img: "images/pisces.png"
}, {
  name: "pisces",
  img: "images/pisces.png"
}]; // CREATE GAMEBOARD

var grid = document.querySelector(".grid__container");
var resultDisplay = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
var card = document.querySelector("img");
cardArray.sort(function () {
  return 0.5 - Math.random();
});

var createBoard = function createBoard() {
  var _loop = function _loop(i) {
    var card = document.createElement("img");
    card.setAttribute("src", "images/moon.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", function () {
      flipCard();
      console.log(card);
    });
    grid.appendChild(card);
    console.log(card);
  };

  for (var i = 0; i < cardArray.length; i++) {
    _loop(i);
  }
};

var checkForMatch = function checkForMatch() {
  var cards = document.querySelectorAll("img");
  var optionOneId = cardsChosenId[0];
  console.log(optionOneId);
  var optionTwoId = cardsChosenId[1];

  if (cardsChosenId[0] === cardsChosenId[1]) {
    alert("You found a match!");
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/moon.png");
    cards[optionTwoId].setAttribute("src", "images/moon.png");
    alert("Sorry, try again!");
  }

  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! You've found all matches";
  }
};

var flipCard = function flipCard() {
  var cards = document.querySelectorAll("img");
  console.log(card); // let cardId = this.getAttribute("data-id");
  // console.log(card);
  // cardsChosen.push(cardArray[cardId].name);
  // cardsChosenId.push(cardId);
  // this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
};

createBoard();
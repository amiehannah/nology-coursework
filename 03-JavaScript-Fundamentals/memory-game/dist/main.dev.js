"use strict";

//SECOND ATTEMPT
// Need to store the images inside a data structure
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
}]; // Create the board

var gridContainer = document.querySelector(".grid__container"); // selecting the grid container

function createBoard() {
  for (var i = 0; i < cardsArr.length; i++) {
    var div = document.createElement('div');
    var card = document.createElement('img');
    card.src = "".concat(card.img);
    card.setAttribute("class", "card");
    div.appendChild(card); //add img to div

    gridContainer.appendChild(div);
    ; //  card.setAttribute('data-id', i);
    //  card.addEventListener('click', flipCard)
  }
}

createBoard(); // const movesCounter = document.querySelector(".moves"); // selecting moves counter
// const timerCounter = document.querySelector(".timer"); // selecting timer counter
// const restartBtn = document.querySelector(".restart"); // restart game button
// let moves = 0;
// let minutes = 0;
// let seconds = 0;
// const imageEl = document.getElementsByTagName('img');
// -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------
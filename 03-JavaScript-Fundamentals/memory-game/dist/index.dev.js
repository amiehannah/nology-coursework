"use strict";

var grid = document.querySelector(".grid__container");
var movesCounter = document.querySelector(".countMoves");
var restartBtn = document.querySelector(".restart");
var scoreCount = 0;
countMoves.textContent = scoreCount;

var getCardArray = function getCardArray() {
  return [{
    name: "aries",
    imgSrc: "./images/aries.png"
  }, {
    name: "cancer",
    imgSrc: "./images/cancer.png"
  }, {
    name: "taurus",
    imgSrc: "./images/taurus.png"
  }, {
    name: "gemini",
    imgSrc: "./images/gemini.png"
  }, {
    name: "leo",
    imgSrc: "./images/leo.png"
  }, {
    name: "aquarius",
    imgSrc: "./images/aquarius.png"
  }, {
    name: "libra",
    imgSrc: "./images/libra.png"
  }, {
    name: "pisces",
    imgSrc: "./images/pisces.png"
  }, {
    name: "aries",
    imgSrc: "./images/aries.png"
  }, {
    name: "cancer",
    imgSrc: "./images/cancer.png"
  }, {
    name: "taurus",
    imgSrc: "./images/taurus.png"
  }, {
    name: "gemini",
    imgSrc: "./images/gemini.png"
  }, {
    name: "leo",
    imgSrc: "./images/leo.png"
  }, {
    name: "aquarius",
    imgSrc: "./images/aquarius.png"
  }, {
    name: "libra",
    imgSrc: "./images/libra.png"
  }, {
    name: "pisces",
    imgSrc: "./images/pisces.png"
  }];
}; // randomise function


var randomiseCards = function randomiseCards() {
  var cardData = getCardArray();
  cardData.sort(function () {
    return Math.random() - 0.5;
  });
  return cardData; //   console.log(cardData);
}; // Generate HTML Cards


var createCards = function createCards() {
  var cardData = randomiseCards(); //    console.log(cardData)
  // GENERATE HTML

  cardData.forEach(function (item) {
    // console.log(item);
    var card = document.createElement("div");
    var faceSide = document.createElement("img");
    var backSide = document.createElement("img");
    card.classList = "card";
    faceSide.classList = "face";
    backSide.classList = "back"; // attach the info to the cards

    faceSide.src = item.imgSrc;
    backSide.src = "images/moon.png";
    card.setAttribute("name", item.name); // ATTACH THE CARDS TO THE SECTION

    grid.appendChild(card);
    card.appendChild(faceSide);
    card.appendChild(backSide);
    card.addEventListener("click", function (e) {
      card.classList.toggle("toggleCard");
      checkForMatch(e);
    });
  });
}; // CHECK CARDS


var checkForMatch = function checkForMatch(e) {
  var clickedCard = e.target;
  console.log(clickedCard);
  clickedCard.classList.add("flipped"); //used for functionality

  var flippedCards = document.querySelectorAll(".flipped");
  console.log(flippedCards); // flip 2 and do a check

  if (flippedCards.length === 2) {
    //do a check
    if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
      console.log("match");
      flippedCards.forEach(function (card) {
        card.classList.remove("flipped");
        card.classList.add("matched");
        card.style.pointerEvents = "none";
        var matchedCards = document.querySelectorAll(".matched");
        console.log(matchedCards.length);

        if (matchedCards.length === 16) {
          setTimeout(function () {
            return alert("Congratulations! You've found all matches in ".concat(scoreCount, " moves!"));
          }, 500);
        }
      });
    } else {
      console.log("no match");
      flippedCards.forEach(function (card) {
        card.classList.remove("flipped");
        setTimeout(function () {
          return card.classList.remove("toggleCard");
        }, 750);
      });
    }

    scoreCount++;
    countMoves.textContent = scoreCount;
  }
}; // RESTART


var restartGame = function restartGame() {
  var cardData = randomiseCards();
  var cardFaces = document.querySelectorAll(".face");
  var cards = document.querySelectorAll(".card");
  cardData.forEach(function (item, index) {
    cards[index].classList.remove("toggleCard");
    cards[index].classList.remove("matched"); // Randomise the cards on refresh

    cards[index].style.pointerEvents = "all";
    cardFaces[index].src = item.imgSrc;
    cards[index].setAttribute("name", item.name);
  });
  scoreCount = 0;
  countMoves.textContent = scoreCount;
};

createCards();
restartBtn.addEventListener("click", function () {
  restartGame();
});
"use strict";

// -----------------------------------------------------------------------------
// SELECTING DOM ELEMENTS
// -----------------------------------------------------------------------------
// calculateMoves
// increments by 1 every time user clicks on a card
// updates the innerhtml of the calculateMovesCounter
var moves = 0;
var movesCounter = document.querySelector(".moves"); // selecting timer counter

var minutes = 0;
var seconds = 0;
var timer = document.querySelector(".timer"); // restart game button 

var restartGameBtn = document.querySelector(".restart");
console.log(restartGameBtn);
console.log(timer);
console.log(movesCounter); // -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------

var calculateMoves = function calculateMoves() {// movesCounter
  // increments by 1 every time user clicks on a card
  // updates the innerhtml of the MovesCounter
  // moves++
  // movesCounter.innerHTML = ""
};

movesCounter.addEventListener("click", calculateMoves); // timer function
// keeps track of how long the user has been playing
// restart game function

var restartGame = function restartGame() {};

restartGameBtn.addEventListener("click", restartGame);
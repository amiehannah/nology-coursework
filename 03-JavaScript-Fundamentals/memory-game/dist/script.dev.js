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
var timerCounter = document.querySelector(".timer"); // restart game button 

var restartGameBtn = document.querySelector(".restart"); // const cardSelected = document.querySelectorAll(".cards");

console.log(restartGameBtn);
console.log(timerCounter);
console.log(movesCounter); // -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------
// store cards in an array

var calculateMoves = function calculateMoves() {} // movesCounter
// increments by 1 every time user clicks on a card
// updates the innerhtml of the MovesCounter
// does this need a forloop?
// moves++
// movesCounter.innerHTML = `${moves} Move(s)`
// /* this needs to be the cards clicked */.addEventListener("click", calculateMoves)
// timer function
// keeps track of how long the user has been playing
// once the user makes the first move, start the timer
// increment second and minute timers
// once all pairs have been matched, game ends and timer stops
// do i display this in a pop up? or update the instruction section to say congrats / time elapsed / moves taken
// restart game function
;

var restartGame = function restartGame() {// restart game
  // reset the board styling
  // shuffles position of cards - using math.random?
  // resets the timer and moves counters 
  // movesCounter.innerHTML = "0 Move(s)"
  // timerCounter.innerHTML = "0 Mins 0 Secs"
};

restartGameBtn.addEventListener("click", restartGame); // on clicking a card, need to change styling and reveal what is on the reverse
// needs to check the subsequent card selected by the user
// if these two cards match
// styling changes so that they are remain visible - face side up
// then card checking function runs again
// checking first card then checking second card and repeat in this fashion
// until all matching pairs have been found
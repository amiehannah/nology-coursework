// -----------------------------------------------------------------------------
// SELECTING DOM ELEMENTS
// -----------------------------------------------------------------------------

// calculateMoves
// increments by 1 every time user clicks on a card
// updates the innerhtml of the calculateMovesCounter
let moves = 0;
const movesCounter = document.querySelector(".moves");

// selecting timer counter
let minutes = 0;
let seconds = 0;
const timer = document.querySelector(".timer");

// restart game button 
const restartGameBtn = document.querySelector(".restart");



console.log(restartGameBtn)
console.log(timer)
console.log(movesCounter)


// -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------



const calculateMoves = () => {
// movesCounter
// increments by 1 every time user clicks on a card
// updates the innerhtml of the MovesCounter
// moves++
// movesCounter.innerHTML = ""
}

movesCounter.addEventListener("click", calculateMoves)

// timer function
// keeps track of how long the user has been playing


// restart game function
const restartGame = () => {

}

restartGameBtn.addEventListener("click", restartGame);
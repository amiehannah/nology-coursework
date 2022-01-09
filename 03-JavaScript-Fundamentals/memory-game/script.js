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
const timerCounter = document.querySelector(".timer");

// restart game button
const restartGameBtn = document.querySelector(".restart");

const cardSelected = document.querySelectorAll(".card");

const gridOfCards = document.querySelector(".grid__container") /* DO I NEED TO SELECT THIS ELEMENT */

// console.log(restartGameBtn);
// console.log(timerCounter);
// console.log(movesCounter);
// console.log(gridOfCards);
// console.log(cardSelected);

// Need to store the images inside a data structure - do I use an array of arrays

// store cards images in an array
const cardsArr = [
["./images/aries.svg"],
["./images/taurus.svg"],
["./images/gemini.svg"],
["./images/cancer.svg"],
["./images/leo.svg"],
["./images/virgo.svg"],
["./images/libra.svg"],
["./images/scorpio.svg"],
["./images/sagittarius.svg"],
["./images/capricorn.svg"],
["./images/aquarius.svg"],
["./images/pisces.svg"],
["./images/aries.svg"],
["./images/taurus.svg"],
["./images/gemini.svg"],
["./images/cancer.svg"],
["./images/leo.svg"],
["./images/virgo.svg"],
["./images/libra.svg"],
["./images/scorpio.svg"],
["./images/sagittarius.svg"],
["./images/capricorn.svg"],
["./images/aquarius.svg"],
["./images/pisces.svg"]
]



// -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------

// at the start of the game cards values are hidden



const calculateMoves = () => {
moves++;
movesCounter.innerHTML = `${moves} Move(s)`;
    // movesCounter
  // increments by 1 every time user clicks on a card
  // updates the innerhtml of the MovesCounter
  // does this need a forloop?
};


// cardSelected.addEventListener("click", calculateMoves());

// timer function
// keeps track of how long the user has been playing
// once the user makes the first move, start the timer
// increment second and minute timers
// once all pairs have been matched, game ends and timer stops
// do i display this in a pop up? or update the instruction section to say congrats / time elapsed / moves taken

// restart game function
const restartGame = () => {
  // restart game
  cardSelected.classList.add(".hidden");
  // reset the board styling
  // shuffles position of cards - using math.random?
  // resets the timer and moves counters
  // movesCounter.innerHTML = "0 Move(s)"
  // timerCounter.innerHTML = "0 Mins 0 Secs"
};


// I want the card selected to be random
const shuffleCard = () => {
  const randomNumber = Math.floor(Math.random() * cardsArr.length);
  // cardSelected.style.

  //the element we want to change = [randomNumber][]
  // cardSelected.style.backgroundImage = [randomNumber][0];
  //minutes = 0;
  //seconds = 0;
}

//   const getQuote = () => {
//     const randomNumber = Math.floor( Math.random() * quotes.length )
//     quoteText.innerHTML = quotes[randomNumber][0]

//     background.style.backgroundImage = `url(${quotes[randomNumber][1]})`
// }

// MATH.RANDOM
// Return a random number between 1 and 100:
// Math.floor((Math.random() * 100) + 1);



restartGameBtn.addEventListener("click", restartGame);

// on clicking a card, need to change styling and reveal what is on the reverse
// needs to check the subsequent card selected by the user
// if these two cards match
// styling changes so that they are remain visible - face side up
// then card checking function runs again
// checking first card then checking second card and repeat in this fashion
// until all matching pairs have been found

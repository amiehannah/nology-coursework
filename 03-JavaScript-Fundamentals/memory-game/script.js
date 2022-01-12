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
const movesCounter = document.querySelector(".moves");

// selecting timer counter

const timerCounter = document.querySelector(".timer");

// restart game button
const restartBtn = document.querySelector(".restart");



let moves = 0;
let minutes = 0;
let seconds = 0;



// Need to store the images inside a data structure
const cardsArr = [
  {
    name: "aries",
    img: "images/aries.svg",
    className: "card",
  },
  {
    name: "aries",
    img: "images/aries.svg",
    className: "card",
  },
  {
    name: "taurus",
    img: "images/taurus.svg",
    className: "card",
  },
  {
    name: "taurus",
    img: "images/taurus.svg",
    className: "card",
  },
  {
    name: "gemini",
    img: "images/gemini.svg",
    className: "card",
  },
  {
    name: "gemini",
    img: "images/gemini.svg",
    className: "card",
  },
  { 
    name: "cancer", 
    img: "images/cancer.svg",
    className: "card",
  },
  {
    name: "cancer", 
    img: "images/cancer.svg", 
    className: "card",
  },
  {
    name: "leo", 
    img: "images/leo.svg",
    className: "card",
  },
  {
    name: "leo", 
    img: "images/leo.svg",
    className: "card",
  },
   {
    name: "virgo", 
    img: "images/virgo.svg",
    className: "card",
   },
   {
    name: "virgo", 
    img: "images/virgo.svg",
    className: "card",
   },
   {
    name: "libra", 
    img: "images/libra.svg",
    className: "card",
   },
   {
    name: "libra", 
    img: "images/libra.svg",
    className: "card",
   },
   {
    name: "scorpio", 
    img: "images/scorpio.svg",
    className: "card",
   },
   {
    name: "scorpio", 
    img: "images/scorpio.svg",
    className: "card",
   },
   {
    name: "sagittarius", 
    img: "images/sagittarius.svg",
    className: "card",
   },
   {
    name: "sagittarius", 
    img: "images/sagittarius.svg",
    className: "card",
   },
   {
    name: "capricorn", 
    img: "images/capricorn.svg",
    className: "card",
   },
   {
    name: "capricorn", 
    img: "images/capricorn.svg",
    className: "card",
   },
   {
    name: "aquarius", 
    img: "images/aquarius.svg",
    className: "card",
   },
   {
    name: "aquarius", 
    img: "images/aquarius.svg",
    className: "card",
   },
   {
     name: "pisces",
     img: "images/pisces.svg",
     className: "card",
   },
   {
    name: "pisces",
    img: "images/pisces.svg",
    className: "card",
  },
  {
    name: "central",
    img: "images/central-img.svg",
    className: "central",
  }

];



// -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------

//on page load - randomise it & on restart game
document.addEventListener('DOMContentLoaded', () => {
  const randomiseCards = cardsArr.sort(()=> 0.5 - Math.random());


})


// const cards = document.querySelectorAll('.card') //produces a nodelist
const gridContainer = document.querySelector(".grid__container")

const createBoard =() => {
cardsArr.forEach(card => {
const createDiv = document.createElement("div")
const createImg = document.createElement("img");
createImg.src = `${card.img}`;
createDiv.appendChild(createImg); //add img to div
gridContainer.appendChild(createDiv); //add div to grid container

  createDiv.addEventListener('click', clickOutcome);

})
}
function clickOutcome() {
  // alert('I have been clicked!')
  calculateMoves();
}

// SHUFFLE CARD FUNCTION
// const shuffleCards = () => {
  const randomiseCards = cardsArr.sort(()=> 0.5 - Math.random());
  console.log(randomiseCards)
// }






// SHUFFLE CARDS
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

const calculateMoves = () => {
  moves++;
  movesCounter.innerHTML = `${moves} Move(s)`;
  if (moves == 1) {
    seconds = 0;
    minutes = 0;
    startTimer();
  }
};


// START TIMER FUNCTION
// timer function
// keeps track of how long the user has been playing
// once the user makes the first move, start the timer
// increment second and minute timers
// once all pairs have been matched, game ends and timer stops
// do i display this in a pop up? or update the instruction section to say congrats / time elapsed / moves taken

/* FIRST ATTEMPT */
let timerId;
const startTimer = () => {
  timerId = setInterval(function () {
    timerCounter.innerHTML = `${minutes} Mins ${seconds} Secs`;
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
  }, 1000);
};


// STOP/RESET TIMER
// this needs to be invoked on both matching all cards - stop timer
// and invoked when user clicks 'Reset Game' btn

const resetTimer = () => {
  timerCounter.innerHTML = "0 Mins 0 Secs";
  seconds = 0;
  minutes = 0;
  moves = 0;
  movesCounter.innerHTML = "0 Move(s)";
  clearInterval(timerId);
  shuffleCards();
// reset the board styling
// shuffles position of cards - using math.random?
};

restartBtn.addEventListener("click", resetTimer);



createBoard();

// cardsArr[0].classList.toggle(".hidden")



// cards.addEventListener('click', () => {
//   if(cards.style.display === 'none') {
//     cards.style.display = 'block';
// } else {
// cards.style.display = 'none';
// }
// });
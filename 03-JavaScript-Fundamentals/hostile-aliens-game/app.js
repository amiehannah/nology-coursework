const scoreDisplay = document.querySelector(".score-container");
const alienDisplay = document.querySelector(".alien-container");
const shootButton = document.querySelector(".shoot");
const gameOverModal = document.querySelector(".game-over");
const restartGame = document.querySelector(".restart-button");
let defenceScore = 5;
let attackScore = 8;
let aliensRemovedArr = [];
let alienRemoved;

gameOverModal.classList.add("hidden");

class AlienShip {
  constructor(shipName, currentPoints, hitPoints, id) {
    this.shipName = shipName;
    this.currentPoints = currentPoints;
    this.hitPoints = hitPoints;
    this.id = id;
  }
  getCurrentScore() {
    return this.currentPoints;
  }
  reduceShipPoints() {
    const alienShipScore = this.currentPoints - this.hitPoints;
    this.currentPoints = alienShipScore;
    return this.currentPoints;
  }
  gameOver() {
    this.currentPoints = 0;
    gameOverModal.classList.remove("hidden");
    console.log("game is over!");
  }
}
//CREATE ARRAY OF SHIPS -> LOOP THROUGH AND CREATE X AMOUNT OF EACH SHIP FOR THE BOARD
let shipsArray = [];
const createAlienFleet = () => {
  alienMotherShip = new AlienShip("mother-ship", 100, 9, 0);
  shipsArray.push(alienMotherShip);
  for (let i = 0; i < 5; i++) {
    alienDefenceShip = new AlienShip("defence-ship", 80, 10, i + 1);
    shipsArray.push(alienDefenceShip);
  }
  for (let i = 0; i < 8; i++) {
    alienAttackShip = new AlienShip("attack-ship", 45, 12, i + 6);
    shipsArray.push(alienAttackShip);
  }
};
createAlienFleet();
console.log(shipsArray);

// CREATE GAMEBOARD DYNAMICALLY
const createHTML = (shipsArr) => {
  console.log(shipsArr);
  shipsArr.forEach((ship, shipId) => {
    renderStr = ship.shipName.replace(/-/g, " ");
    const shipEl = document.createElement("div");
    shipEl.setAttribute("class", `${ship.shipName}`);
    shipEl.setAttribute("id", "ship-" + shipId);
    // console.log(shipEl);
    shipEl.textContent = renderStr;
    alienDisplay.append(shipEl);
  });
};
createHTML(shipsArray);

// CREATE SCORE BOARD DYNAMICALLY
const scores = [
  "*** scores ***",
  "mothership",
  "defence ships",
  "attack ships",
  `${alienMotherShip.currentPoints}`,
  `${defenceScore}`,
  `${attackScore}`,
];

const renderScoreBoard = () => {
  scores.forEach((score, scoreIndex) => {
    const scoreEl = document.createElement("div");
    scoreEl.setAttribute("class", "scores-" + scoreIndex);
    scoreEl.textContent = score;
    scoreDisplay.append(scoreEl);
  });
};
renderScoreBoard();

const mShipScore = document.querySelector(".scores-4");
const dShipScore = document.querySelector(".scores-5");
const aShipScore = document.querySelector(".scores-6");

// SHOOT ALIEN SHIP FUNCTION
const handleClick = (e) => {
  let randomShip = shipsArray[Math.floor(Math.random() * shipsArray.length)];
  console.log(randomShip);

  if (
    alienMotherShip.currentPoints === 0 ||
    (alienDefenceShip.currentPoints === 0 &&
      alienAttackShip.currentPoints === 0)
  ) {
    gameOver();
  } else {
    shootAlienShip(randomShip);
  }
};

//ONLY WANT TO SHOOT THE SHIP IF - CURRENT POINTS ARE GREATER THAN 0 AND THE ALIEN HASN'T ALREADY BEEN SUNK
const shootAlienShip = (randomShip) => {
  if (randomShip.currentPoints <= 0) {
    //remove randomship for shipsArray? so it's out of the game?
    const alienRemoved = shipsArray.indexOf(randomShip);
    aliensRemovedArr.push(alienRemoved);
    shipsArray.splice(alienRemoved, 1);
    console.log(shipsArray);
    console.log(`ship id that has been removed is: ${randomShip.id}`);
    shipIsSunk(randomShip);
  }
  if (
    randomShip.currentPoints > 0 &&
    !aliensRemovedArr.includes(randomShip.shipId)
  ) {
    randomShip.reduceShipPoints();
    addHitStyling(randomShip);
    reduceScoreBoard(randomShip);
  }
  if (
    (attackScore <= 0 && defenceScore <= 0) ||
    alienMotherShip.currentPoints <= 0
  ) {
    randomShip.gameOver();
  }
};

const addHitStyling = (randomShip) => {
  const ship = document.getElementById("ship-" + randomShip.id);
  ship.classList.add("hit");
  setTimeout(() => ship.classList.remove("hit"), 250);
};

const shipIsSunk = (randomShip) => {
  console.log("ship is sunk!");
  const ship = document.getElementById("ship-" + randomShip.id);
  ship.classList.remove("hit");
  ship.classList.add("sunk");
  if (
    attackScore > 0 &&
    ship.classList.contains("attack-ship") &&
    ship.classList.contains("sunk")
  ) {
    aShipScore.innerHTML = attackScore - 1;
    attackScore--;
  } else {
    if (
      defenceScore > 0 &&
      ship.classList.contains("defence-ship") &&
      ship.classList.contains("sunk")
    ) {
      dShipScore.innerHTML = defenceScore - 1;
      defenceScore--;
    }
  }
};

const reduceScoreBoard = (randomShip) => {
  if ((randomShip = alienMotherShip)) {
    mShipScore.innerHTML = alienMotherShip.currentPoints;
  }
};

//EVENT LISTENERS
shootButton.addEventListener("click", () => {
  handleClick();
});

restartGame.addEventListener("click", () => {
  gameOverModal.classList.add("hidden");
  alienDisplay.innerHTML = "";
  shipsArray = [];
  aliensRemovedArr = [];
  createAlienFleet();
  console.log(shipsArray);
  createHTML(shipsArray);
  // RESET SCORES
  defenceScore = 5;
  dShipScore.innerHTML = defenceScore;
  attackScore = 8;
  aShipScore.innerHTML = attackScore;
  mShipScore.innerHTML = alienMotherShip.getCurrentScore();
});

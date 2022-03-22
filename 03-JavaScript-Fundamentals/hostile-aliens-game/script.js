const shootButton = document.querySelector(".shoot");
const motherShipScore = document.querySelector("#m-ship-score");
const defenceShipScore = document.querySelector("#d-ship-score");
const attackShipScore = document.querySelector("#a-ship-score");
const startButton = document.querySelector(".start-button");
const modal = document.querySelector("#modal");
const gameOver = document.querySelector(".game-over");
const restartGame = document.querySelector(".restart-button");

 gameOver.classList.add("hidden"); // DO SOMETHING WITH THIS LATER
// restartGame.addEventListener('click', () => {
  
// })

// motherShipScore.innerHTML = "20";
// defenceShipScore.innerHTML = "20";
// attackShipScore.innerHTML = "20";

/* 
// ON STARTING THE GAME RANDOMISE THE SEQUENCE OF SHIPS
// ON USER CLICKING THE BUTTON -> GENERATE A RANDOM NUMBER
// USING THE RANDOM NUMBER GENERATED FIND THE SHIP AT THAT RANDOM NUMBER INDEX
// CALL THE METHOD - shipIsHit() ON EACH BUTTON CLICK, RANDOM ALIEN SHIP IS HIT AND POINTS ARE REDUCED
// REDUCE THE SCORE VISUALLY ON SCORE BOARD + ONCE HIT ADD A CSS EFFECT
// ONCE THE ALIEN SHIPS POINT HAVE HIT ZERO THE SHIP IS DESTROYED AND CAN'T BE HIT AGAIN
// STORE HIT SHIPS IN A NEW ARRAY (PUSH IT)? ADD CLASS LIST OF HIDDEN?
// GAME OVER WHEN ALL ALIEN SHIPS HAVE BEEN HIT or MOTHERSHIP = 0
// GAME OVER - GAME RESTARTS

*/
// TO DO:
// HOW TO CREATE THE ALIEN FLEET EASILY - IS THERE A BETTER WAY OF DOING THIS?
// HOW DO YOU LINK THE ARRAY TO THE HTML EQUIVALENTS?
// ONCE HIT ADD CSS EFFECT - BLINK OR CHANGE COLOUR
// ONCE HIT REDUCE TOTAL SCORE (NEED TO RELOOK AT MY SCORE TABLE)
// RANDOMISE ARRAY ON GAME LOAD
// ADD GAME OVER MODAL

class alienShip {
  constructor(shipName, currentPoints, hitPoints) {
    this.shipName = shipName;
    this.currentPoints = currentPoints;
    this.hitPoints = hitPoints;
  }
  getCurrentScore() {
      return this.currentPoints;
  }

  shipIsHit() {
   // when button is pressed random alien ship is hit
   // points are reduced
   const alienShipScore = this.currentPoints - this.hitPoints;
   this.currentPoints = alienShipScore;
   return this.currentPoints;
  }

  gameOver() {
      this.currentPoints = 0;
  }
} // end of class



const createAlienFleet = () => {
    alienMotherShip = new alienShip("motherShip", 100, 9);
    alienDefenceShip = new alienShip("defenceShip", 80, 10);
    alienDefenceShip2 = new alienShip("defenceShip", 80, 10);
    alienDefenceShip3 = new alienShip("defenceShip", 80, 10);
    alienDefenceShip4 = new alienShip("defenceShip", 80, 10);
    alienDefenceShip5 = new alienShip("defenceShip", 80, 10);
    alienAttackShip = new alienShip("attackShip", 45, 12);
    alienAttackShip2 = new alienShip("attackShip", 45, 12);
    alienAttackShip3 = new alienShip("attackShip", 45, 12);
    alienAttackShip4 = new alienShip("attackShip", 45, 12);
    alienAttackShip5 = new alienShip("attackShip", 45, 12);
    alienAttackShip6 = new alienShip("attackShip", 45, 12);
    alienAttackShip7 = new alienShip("attackShip", 45, 12);
    alienAttackShip8 = new alienShip("attackShip", 45, 12);
}

createAlienFleet();

console.log(createAlienFleet);

console.log(alienAttackShip2.getCurrentScore());
console.log(alienAttackShip2.shipIsHit()); //shipIsHit method works




// START GAME CLICK HIDES MODAL
startButton.addEventListener('click', () => {
  modal.classList.add("hidden");

// ON LOAD DO I NEED TO RANDOMISE ARRAY EACH TIME?
// loadGame(); function?
})

// STORE ALIEN SHIPS IN ARRAY

let alienShipFleetArr = [];
alienShipFleetArr
.push(
  alienMotherShip,
  alienDefenceShip,
  alienDefenceShip2,
  alienDefenceShip3,
  alienDefenceShip4,
  alienDefenceShip5,
  alienAttackShip,
  alienAttackShip2,
  alienAttackShip3,
  alienAttackShip4,
  alienAttackShip5,
  alienAttackShip6,
  alienAttackShip7,
  alienAttackShip8
);
console.log(alienShipFleetArr);



shootButton.addEventListener("click", () => {
  let randomShip = alienShipFleetArr[Math.floor(Math.random()*alienShipFleetArr.length)];
  console.log(randomShip);
  randomShip.shipIsHit();
  return randomShip;
  })
  

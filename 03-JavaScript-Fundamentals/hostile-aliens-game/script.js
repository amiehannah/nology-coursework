const shootButton = document.querySelector(".shoot");
const textOutput = document.querySelector("#text-output");
const motherShipScore = document.querySelector("#m-ship-score");
const defenceShipScore = document.querySelector("#d-ship-score");
const attackShipScore = document.querySelector("#a-ship-score");
const startButton = document.querySelector(".start-button");
const modal = document.querySelector("#modal");

// motherShipScore.innerHTML = "20";
// defenceShipScore.innerHTML = "20";
// attackShipScore.innerHTML = "20";

startButton.addEventListener('click', () => {
  modal.classList.add("hidden");
})


/* 
EACH TIME BUTTON IS PRESSED, RANDOM ALIEN SHIP IS HIT AND POINTS ARE REDUCED
ONCE THE ALIEN SHIPS POINT HAVE HIT ZERO THE SHIP IS DESTROYED AND CAN'T BE HIT AGAIN
GAME OVER WHEN ALL ALIEN SHIPS HAVE BEEN HIT
GAME OVER - GAME RESTARTS

GAME SHOULD CONTAIN: 
1X MOTHERSHIP (100 Hit Points - Loses 9 hit points every time it is hit - All ships are destroyed if the Mother ship is destroyed )
5X DEFENCE SHIPS (Each one starts with 80 hit points - Each one Loses 10 hit points each time it is hit)
8X ATTACKSHIP ( Each starts with 45 hit points - Each loses 12 hit points each time it is hit. )

The main task is to create a game - HOW YOU BREAK DOWN A PROBLEM
TDD and Unit Testing, OOP concepts, and Pure Functions
solve this in under 150 lines including comments - NO MORE

WHEN IT IS HIT - TEXT CSS TO BLINK

*/

class alienShip {
  constructor(shipName, currentPoints, hitPoints) {
    this.shipName = shipName;
    this.currentPoints = currentPoints;
    this.hitPoints = hitPoints;
    this.alienShipFleetArr = []
  }
  getCurrentScore() {
      return this.currentPoints;
  }

  shipIsHit() {
   // when button is pressed random alien ship is hit
   // points are reduced
   const alienShipScore = this.currentPoints - this.hitPoints;
   return alienShipScore;
  }

  gameOver() {
      this.currentPoints = 0;
  }
} // end of class


const createFleet = () => {
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



//textOutput.innerHTML = "Shoot to Start";

// button.addEventListener("click", () => {
//   // Math.floor(Math.random() * 10);
//   scoreBoard.innerHTML = `
//     <h3> Mothership </h3>
//     <h3> Defence Ship </h3>
//     <h3> Attack Ship </h3>
// `;
// });

// STORE THE SHIPS IN AN ARRAY? or how to store in OOP?
// ON STARTING THE GAME RANDOMISE THE SEQUENCE OF SHIPS
// ON USER CLICKING THE BUTTON
// GENERATE A RANDOM NUMBER
// LOOP THROUGH THE ARRAY AND USING THE RANDOM NUMBER GENERATED FIND THE SHIP AT THAT INDEX
// THIS SHIP IS NOW 'HIT'
// REDUCE THE SCORE VISUALLY ON SCREEN
// STORE THIS HIT SHIP IN A NEW ARRAY (PUSH IT)

// HITS RANDOM ALIEN SHIP
// generate a random number within an array
// hit this ship
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  


// const shuffleCards = (array) => {
//     let randomiseCards = array.sort(() => 0.5 - Math.random());
//     return randomiseCards;
//   };

const shootButton = document.querySelector(".shoot");
const motherShipScore = document.querySelector("#m-ship-score");
const defenceShipScore = document.querySelector("#d-ship-score");
const attackShipScore = document.querySelector("#a-ship-score");
const startButton = document.querySelector(".start-button");
const modal = document.querySelector("#modal");
const gameOverModal = document.querySelector(".game-over");
const restartGame = document.querySelector(".restart-button");

const gameContainer = document.querySelector(".gameContainer");

modal.classList.add("hidden")
gameOverModal.classList.add("hidden"); 
// DO SOMETHING WITH THIS LATER
// restartGame.addEventListener('click', () => {
// })

class alienShip {
  constructor(shipName, currentPoints, hitPoints, id) {
    this.shipName = shipName;
    this.currentPoints = currentPoints;
    this.hitPoints = hitPoints;
    this.id = id;
  }
  getCurrentScore() {
      return this.currentPoints;
  }
  reduceShipPoints() {  // points are reduced
   const alienShipScore = this.currentPoints - this.hitPoints;
   this.currentPoints = alienShipScore;
   return this.currentPoints;
  }
  gameOver() {
      this.currentPoints = 0;
      gameOverModal.classList.remove("hidden");
  }
  createShip() {
    return `<div class=${this.shipName} id="${this.id}>${this.shipName}</div>`
  }
} 

//CREATE ARRAY OF SHIPS
//LOOP THROUGH AND CREATE X AMOUNT OF EACH SHIP FOR THE BOARD
const shipsArr = [];
const createAlienFleet = () => {
    alienMotherShip = new alienShip("motherShip", 100, 9, 1);
    shipsArr.push(alienMotherShip);
    for(let i = 0; i < 5; i++) {
      alienDefenceShip = new alienShip("defenceShip", 80, 10, i + 2);
      shipsArr.push(alienDefenceShip);
    }
    for(let i=0; i < 8; i++) {
      alienAttackShip = new alienShip("attackShip", 45, 12, i + 7);
      // console.log(alienAttackShip);
      shipsArr.push(alienAttackShip);
      // console.log(shipsArr);
    }
}


createAlienFleet();
// console.log(alienMotherShip.createShip());

const renderShip = () => {
  shipsArr.map(ship => {
    // console.log(ship);
    // console.log(ship.createShip())
    return `<div class=${this.shipName} id="${this.id}>${this.shipName}</div>`
    // gameContainer.innerHTML += ship.createShip();
    // gameContainer.appendChild(`${ship}.createShip()`);
  })
}
renderShip();

// START GAME CLICK HIDES MODAL (& SHUFFLES ARRAY?)
startButton.addEventListener('click', () => {
  modal.classList.add("hidden");
})


// SHUFFLE ARRAY AT GAME START
// ON STARTING THE GAME RANDOMISE THE SEQUENCE OF SHIPS
const shuffleArray = shipsArr.sort(() => Math.random() - 0.5);
// console.log(shuffleArray); //TO CHECK IT'S SHUFFLED OK







// ON USER CLICKING THE BUTTON -> GENERATE A RANDOM NUMBER
// USING THE RANDOM NUMBER GENERATED FIND THE SHIP AT THAT RANDOM NUMBER INDEX
const shootAlienShip = () => {
  let randomShip = shuffleArray[Math.floor(Math.random()*shuffleArray.length)];
  console.log(randomShip);
  console.log(randomShip.shipName);

  if(alienMotherShip.currentPoints === 0 || (alienDefenceShip.currentPoints === 0 && alienAttackShip.currentPoints === 0)){
    randomShip.gameOver();
  } else {
    randomShip.reduceShipPoints();
  }
  
    if (randomShip === alienMotherShip) {
      motherShipScore.innerHTML = alienMotherShip.getCurrentScore();
    } else {
      if (randomShip.shipName === alienDefenceShip) {
     
        defenceShipScore.innerHTML = alienDefenceShip.getCurrentScore();
      }
    }
      
  if(randomShip.currentPoints <=0) {
  hideAlienShip();
  }
}




const hideAlienShip = () => {

}


//EVENT LISTENERS
shootButton.addEventListener("click", () => {
  shootAlienShip();
})
restartGame.addEventListener("click", () => {
gameOverModal.classList.add("hidden");
})



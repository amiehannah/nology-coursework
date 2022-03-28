const scoreDisplay = document.querySelector(".score-container")
const alienDisplay = document.querySelector(".alien-container")
const shootButton = document.querySelector(".shoot")


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
}


//CREATE ARRAY OF SHIPS -> LOOP THROUGH AND CREATE X AMOUNT OF EACH SHIP FOR THE BOARD
const shipsArr = [];
const createAlienFleet = () => {
    alienMotherShip = new alienShip("mothership", 100, 9, 1);
    shipsArr.push(alienMotherShip);
    for(let i = 0; i < 5; i++) {
      alienDefenceShip = new alienShip("defence-ship", 80, 10, i + 2);
      shipsArr.push(alienDefenceShip);
    }
    for(let i=0; i < 8; i++) {
      alienAttackShip = new alienShip("attack-ship", 45, 12, i + 7);
      // console.log(alienAttackShip);
      shipsArr.push(alienAttackShip);
      // console.log(shipsArr);
    }
}
createAlienFleet();
console.log(shipsArr)

// CREATE GAMEBOARD DYNAMICALLY 
shipsArr.forEach((ship, shipId) => {
    renderStr = ship.shipName.replace(/-/g, ' ');
    const shipEl = document.createElement('div')
    shipEl.setAttribute('class', `${ship.shipName}`);
    shipEl.setAttribute('id', "ship-" + shipId)
    shipEl.textContent = renderStr;
    alienDisplay.append(shipEl)
    // console.log(shipEl)
})



// CREATE SCORE BOARD DYNAMICALLY
const scores = ["*** scores ***", "mothership", "defence ship", "attack ship", `${alienMotherShip.currentPoints}`, `${alienDefenceShip.currentPoints}`, `${alienAttackShip.currentPoints}`]

const renderScoreBoard = () => {
  scores.forEach((score, scoreIndex) => {
    const scoreEl = document.createElement("div")
    scoreEl.setAttribute('class', 'scores-' + scoreIndex)
    scoreEl.textContent = score;
    scoreDisplay.append(scoreEl)
  })
}
renderScoreBoard();


const mothership = document.getElementById("ship-0")
const defenceship1 = document.getElementById("ship-1")
const defenceship2 = document.getElementById("ship-2")
const defenceship3 = document.getElementById("ship-3")
const defenceship4 = document.getElementById("ship-4")
const defenceship5 = document.getElementById("ship-5")
const attackship6 = document.getElementById("ship-6")
const attackship7 = document.getElementById("ship-7")
const attackship8 = document.getElementById("ship-8")
const attackship9 = document.getElementById("ship-9")
const attackship10 = document.getElementById("ship-10")
const attackship11 = document.getElementById("ship-11")
const attackship12 = document.getElementById("ship-12")
const attackship13 = document.getElementById("ship-13")
const mShipScore = document.querySelector(".scores-4")
const dShipScore = document.querySelector(".scores-5")
const aShipScore = document.querySelector(".scores-6")

// mothership.classList.add("hit")
// defenceship1.classList.add("hit")
// attackship.classList.add("shipIsSunk")
// mShipScore.innerHTML = 12
// dShipScore.innerHTML = 13
// aShipScore.innerHTML = 1

// SHOOT ALIEN SHIP FUNCTION 
const shootAlienShip = () => {
  let randomShip = shipsArr[Math.floor(Math.random()*shipsArr.length)];
  console.log(randomShip);
  console.log(alienMotherShip.currentPoints);
  console.log(alienDefenceShip.currentPoints);
  console.log(alienAttackShip.currentPoints);

  if(alienMotherShip.currentPoints === 0 || (alienDefenceShip.currentPoints === 0 && alienAttackShip.currentPoints === 0)){
    randomShip.gameOver();
  } else {
    randomShip.reduceShipPoints();
    console.log(randomShip)
  }
  if (randomShip.currentPoints <=0) {
    shipIsSunk();
  }
console.log(randomShip.id);
return randomShip.id;

}


// shoot button pressed
// get the randomship id
// match it to the html element
// apply the hit styling 
// reduce the current points on the score board
// once currentPoints = 0 or less than 0 apply to shipIsSunk class


const shipIsHit = () => {

}


const shipIsSunk = () => {
console.log("ship is sunk!")

// .classList.add("shipIsSunk")
}

//EVENT LISTENERS
shootButton.addEventListener("click", () => {
  shootAlienShip();
  shipIsHit();
})
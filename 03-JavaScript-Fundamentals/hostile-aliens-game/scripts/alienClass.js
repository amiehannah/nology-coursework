export class AlienShip {
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
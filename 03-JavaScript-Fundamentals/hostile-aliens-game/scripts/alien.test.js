import { AlienShip } from "./alienClass";

describe("Tests to determine whether a class of AlienShip creates the correct alien fleet", () => {
  const testAlienShip = new AlienShip("battleship", 90, 9, 3);
  it("Should return the correct shipName", () => {
    expect(testAlienShip.shipName).toEqual("battleship");
  });

  it("Should return the correct number of points once we instantiate the object", () => {
    const newBattleship = new AlienShip("battleship", 90, 9, 3);
    expect(newBattleship.getCurrentScore()).toBe(90);
  });

  it("Should define the reduceShipPoints() method", () => {
    expect(typeof testAlienShip.reduceShipPoints).toBe("function");
  });

  it("Should reduce ship points correctly on running the reduceShipPoints() method", () => {});
  testAlienShip.reduceShipPoints();
  expect(testAlienShip.currentPoints).toBe(81);
});

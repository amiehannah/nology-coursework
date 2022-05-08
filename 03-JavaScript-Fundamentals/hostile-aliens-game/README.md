# Task: <br/>

To create a simple text only game loosely based on Space Invaders. 
The game should contain a single button that hits a random alien ship in the fleet. 
Each time the button is pressed, a random alien ship is hit and its hit points are reduced. 
Once an alien ships points have hit zero the ship is destroyed and can’t be hit again. 
The game is over once all alien ships have been destroyed. For best results, approach this challenge with an OOP mindset although some functions may be needed.

## Approach: <br/>
1. Created a class of alienShip 
which contained the following methods getCurrentScore(), reduceShipPoints(), gameOver()

2. Created a blank shipsArray, which will store all of the alien fleet.
3. createAlienFleet function, uses a for loop to create ....


Then push all of the alien fleet created in this function into the shipsArray.
4. ForEach ship in the shipsArray create a div element, with relevant name and id attributes and display the ships name on the board.
5. 
6. Clicking the 'shoot button' triggers the handleClick function.
The handleClick function firstly randomises the sequence of ships in the shipsArray. It then checks to see if the current points of the alien fleet are greater than 0 (if not, trigger the gameOver modal) else run the the shootAlienShip function.



// FOR A HIT TO BE SUCCESSFUL THE ALIEN SHIP POINTS NEED TO BE BIGGER THAN 0 AND THE MOTHERSHIP STILL NEEDS TO BE IN PLAY (MOTHERSHIP != 0)
// 

/* 
// CALL THE METHOD - shipIsHit() ON EACH BUTTON CLICK, RANDOM ALIEN SHIP IS HIT AND POINTS ARE REDUCED
// REDUCE THE SCORE VISUALLY ON SCORE BOARD + ONCE HIT ADD A CSS EFFECT
// ONCE THE ALIEN SHIPS POINT HAVE HIT ZERO THE SHIP IS DESTROYED AND CAN'T BE HIT AGAIN
// STORE HIT SHIPS IN A NEW ARRAY (PUSH IT)? ADD CLASS LIST OF HIDDEN?
// GAME OVER WHEN ALL ALIEN SHIPS HAVE BEEN HIT or MOTHERSHIP = 0
// GAME OVER - GAME RESTARTS


### Requirements: <br/>

• You need to have it as a public repository on GitHub
o In the repo you will also need a README.md with a short intro to the project.
• You may only use JS / CSS / HTML, no frameworks or libraries.
• You should be able to solve this in under 150 lines including comments (excluding
unit tests) and any more than that is a sign you have over complicated the problem
• Use an Object Oriented Programming approach where possible
• You can use basic HTML and CSS to tidy up the output but no more
• Try to use a TDD approach by writing your tests first, but at least make sure
everything is tested


Rules
• You should be able to start a new game once the game is over
• Some text visualisation of the ships and their hit points
• The game should have the following Alien ships:

o 1xMothership-
▪ 100 Hit Points -
▪ Loses 9 hit points every time it is hit -
▪ All ships are destroyed if the Mother ship is destroyed 

o 5xDefenceship-
▪ Each one starts with 80 hit points -
▪ Each one Loses 10 hit points each time it is hit 

o 8xAttackship
▪ Each starts with 45 hit points
▪ Each loses 12 hit points each time it is hit.



//   // (!alienRemoved.includes(randomShip.shipId)
  // const ship = document.getElementById("ship-" + randomShip.id);
  // console.log(ship);
  // // !ship.classList.contains("sunk")
  // console.log(aliensRemovedArr.indexOf(ship));
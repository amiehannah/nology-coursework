Task:
To build a functioning browser based game that pushes your understanding of JavaScript. 


Approach:
- I chose to build a matching pairs or memory game
- The concept of the game is to match all of the zodiac signs in the fastest time possible, using the least number of moves

- Breaking down the problem --> 

//PSEUDOCODE

// at the start of the game the cards values are hidden
// game begins when user clicks on a card
// movesCounter function is activated upon the first click and keep track of each move the user makes
// timer function is also activated upon the first click 
// first card is selected, then second card is selected
// these are compared to see if they match - if they match cards remain visible, if no match is found, they remain hidden until it's matching pair is found
// FLIP ANIMATION
// once all pairs have been matched, game ends and timer stops
// to restart the game - user clicks on restart game button
// this hides all the cards again
// this shuffles the images 
// this returns moveCounter and timer functions to zero so the game can start again


- Stored the svg images in an array of objects
- 
- Created a timer, which is activated on click using setInterval() and clearInterval() methods
- Created a counter, which records the players moves, incrementing by 1 each time the user clicks on a image/card.



Requirements:
- Pseudocode - break down your approach.
- Public repo with at least 15 Git commits.
- JS code formatted as functions or classes.
- Use click and keypress event sto trigger the events within the game, avoiding using refresh to start the game again.
- Mobile first, responsive design.
- Linked to your portfolio.





Task:
To build a calculator using HTML, CSS and JavaScript. This calculator should accept inputs from a user, is able to perform a range of calculations and will produce an output.


Breaking down the problem --> Essential functionality needed:

- Addition
- Subtraction
- Division
- Multiplication
- Clear/reset the display
- Visually display the answer / output
- Also work with decimals


Logic:
1. Listens out for buttons pressed from a user and displays these
2. Store this number to be used in calculations
3. User then selects an operator button
4. Listens for the next set of number buttons selected
5. When the user clicks equals - this needs to perform the maths and return a total value
6. When the user clicks clear the calculator needs to reset.


Requirements:
- Minimum of 10 Git commits for the development.
- Accept a minimum of 2 inputs, perform an operation and return the output.
- Mobile first approach



Approach:
- First I started by selecting all the elements I needed to target in variables. I initially saved each number/operator into individual variables before changing my approach.

- Instead by using querySelectorAll on numberBtns and operatorBtns (to select these elements) I realised I can later iterate over them, as this returns a node list and will be far more useful in some of the functionality.

- The array iterator I used to iterate over the numberBtns/operatorBtns was forEach(). By adding an event listener, listening out for the click event 


UI:
- Created a mesh gradient in Illustrator which I've then applied to the background of the webpage
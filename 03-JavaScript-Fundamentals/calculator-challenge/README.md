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


- The array iterator I used to loop over the numberBtns/operatorBtns was forEach(). By adding an event listener, listening out for the click event I was able to capture the value of these buttons. 
For the number buttons I stored the number selected inside a variable to use later in the calculations. I then updated the display of the calculator to reflect the chosen firstValue.


- After the firstValue has been selected, I then set up an event listener to capture the value of the operator clicked by the user.   


- One part of the functionality of my design was to create a calculator display split into two parts to allow the user to see the previous value and operator, or sum they had entered whilst performing calculations. 
Once the firstValue has been selected and an operator, update the innerHTML of the top display to show these values. At this stage the firstValue number is then stored within a variable called storedValue and the firstValue is set to blank, to accept the next value chosen by the user.
The bottom display will show the sum of the calculation.


- Calculate total functionality --> 
I used an if/else if statement to work through the operators and return the value computed by the operator selected. Then updating the calculator display with the sum. I then reset the variables used to store my number values to allow the user to make additional calculations should they wish to.


- Clear button functionality --> 
On pressing the clear button all variables are reset and the display is cleared, ready for the next user.


- Decimal button functionality --> 
To prevent the user from adding more than one decimal point, I have added an event listener and used the method includes(".") to determine whether the firstValue includes this character and if so only add one.


UI:
- I created a mesh gradient in Illustrator which I've then applied to the background of the webpage
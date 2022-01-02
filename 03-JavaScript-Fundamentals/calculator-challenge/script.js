// -----------------------------------------------------------------------------
// SELECTING DOM ELEMENTS
// -----------------------------------------------------------------------------
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
const numberBtns = document.querySelectorAll(".calculator__btn-num");
const operatorBtns = document.querySelectorAll(".calculator__btn");
const topCalcDisplay = document.querySelector(".display__value1");
const btmCalcDisplay = document.querySelector(".display__value2");

let firstValue = "";
// let secondValue = "";
let storedValue = "";
let operator = "";
let sum = 0;

// -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------

/* UPDATE DISPLAY OUTPUT */
// to display the output --> dynamically changing the inner html of calculator__display
const updateDisplay = (number) => {
  btmCalcDisplay.innerHTML = number;
};

// 1. Listen out for number buttons pressed and display value
/* NUMBER BUTTON FUNCTIONALITY */
// updating display -> for each calculator btn number -> listen out for the event.target -> update the inner html
numberBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", (event) => {
    // 2. store this initial number inside a variable
    firstValue += event.target.innerHTML;
    updateDisplay(firstValue);
  });
});

// 3. listen out for the operator button pressed

/* OPERATOR BUTTON FUNCTIONALITY */
// for each operator btn -> listen out for click event to determine which element the event occurred upon
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (event) => {
    operator = event.target.value;
    if (firstValue) {
      /* once user clicks on a operator button move value in btmCalDisplay to topCalcDisplay */
      topCalcDisplay.innerHTML = firstValue + " " + operator;
      btmCalcDisplay.innerHTML = "";
      // store the firstValue in a variable to be able to use in the sums below
      // parseFloat -> contains a decimal place/floating point number
      storedValue = parseFloat(firstValue);
      firstValue = "";

      /* need to work on this section -> it fails to show in the topCalcDisplay box at the moment*/
      if (sum) {
        /* when user clicks on an operator btn again move the sum value to topcaldisplay */
        topCalcDisplay.innerHTML = storedValue;
        btmCalcDisplay.innerHTML = "";
      }
    }
  });
});

/* EQUALS BUTTON FUNCTIONALITY */

const calculateTotal = () => {
  if (operator === "+") {
    sum = storedValue + parseFloat(firstValue);
  } else if (operator === "-") {
    sum = storedValue - parseFloat(firstValue);
  } else if (operator === "*") {
    sum = storedValue * parseFloat(firstValue);
  } else if (operator === "/") {
    sum = storedValue / parseFloat(firstValue);
  }
  topCalcDisplay.innerHTML = "";
  updateDisplay(sum);

  // if the user wants to continue to make additional calculations
  storedValue = sum;
  firstValue = "";
};

equalsBtn.addEventListener("click", calculateTotal);

/* CLEAR BUTTON FUNTIONALITY */
const clearDisplay = () => {
  // reset all values
  firstValue = "";
  storedValue = "";
  operator = "";
  sum = "";
  topCalcDisplay.innerHTML = "";
  updateDisplay(0);
};

clearBtn.addEventListener("click", clearDisplay);

/* HELP */
// - [ ] How to stop user from adding more than one decimal point
// - [ ] if user was to use a floating point number smaller than 1 - to add the 0 in front of it
// - [ ] How to contiue calculations once equals has been pressed and visually move it into the right display box
// - [ ] Target.event.value -> recap explanation

/* DECIMAL BUTTON FUNCTIONALITY */
// stop user from adding more than one decimal point

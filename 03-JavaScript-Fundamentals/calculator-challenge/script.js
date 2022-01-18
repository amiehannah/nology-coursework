// -----------------------------------------------------------------------------
// SELECTING DOM ELEMENTS
// -----------------------------------------------------------------------------
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
const numberBtns = document.querySelectorAll(".calculator__btn-num");
const operatorBtns = document.querySelectorAll(".calculator__btn");
const topCalcDisplay = document.querySelector(".display__valueA");
const btmCalcDisplay = document.querySelector(".display__valueB");
const decimalBtn = document.querySelector("#decimal");

let firstValue = "";
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
    }
  // if the user wants to continue to make additional calculations - move sum to the top display and let the bottom display return to blank to accept further values
    if (sum) {
      topCalcDisplay.innerHTML = sum + " " + operator;
      btmCalcDisplay.innerHTML = "";
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

/* CLEAR BUTTON FUNTIONALITY - reset all values */
const clearDisplay = () => {
  firstValue = "";
  storedValue = "";
  operator = "";
  sum = "";
  topCalcDisplay.innerHTML = "";
  updateDisplay(0);
};

clearBtn.addEventListener("click", clearDisplay);

/* DECIMAL BUTTON FUNCTIONALITY */
// How to stop user from adding more than one decimal point
decimalBtn.addEventListener("click", () => {
  if (!firstValue.includes(".")) {
    firstValue += ".";
    updateDisplay(firstValue);
  }
});

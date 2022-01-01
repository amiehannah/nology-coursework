// -----------------------------------------------------------------------------
// SELECTING DOM ELEMENTS
// -----------------------------------------------------------------------------
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
const numberBtns = document.querySelectorAll(".calculator__btn-num");
const operatorBtns = document.querySelectorAll(".calculator__btn");
const calcDisplay = document.querySelector(".calculator__display");
const topDisplay = document.querySelector(".storedValue");

let initialValue = "";
let storedValue = "";
let sum = "";

// -----------------------------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------------------------

/* UPDATE DISPLAY OUTPUT */
// to display the output --> dynamically changing the inner html of calculator__display
const updateDisplay = (number) => {
  calcDisplay.innerHTML = number;
};

/* NUMBER BUTTON FUNCTIONALITY */

// updating display -> for each calculator btn number -> listen out for the event.target -> update the inner html

numberBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", (event) => {
    initialValue += event.target.innerHTML;
    updateDisplay(initialValue);
  });
});

/* OPERATOR BUTTON FUNCTIONALITY */
// for each operator btn -> listen out for click event to determine which element the event occurred upon
operatorBtns.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    operator = event.target.value;
    console.log(operator); /* this can be removed later */

    // store the initialValue in a variable to be able to use in the sums below
    // parseFloat -> contains a decimal place/floating point number
    if (initialValue) {
      storedValue = parseFloat(initialValue);
      topDisplay.innerHTML = storedValue;
      initialValue = "";
      console.log(storedValue); /* this can be removed later */
    }

    if (operator.value === "+") {
      // run the addValues function
      sum = storedValue + parseFloat(initialValue);
      //   addValues();
    } else if (operator === "-") {
      // run the subtractValues function
      sum = storedValue - parseFloat(initialValue);
    } else if (operator === "*") {
      // run the multiplyValues function
      sum = storedValue * parseFloat(initialValue);
    } else if (operator === "/") {
      // run the divideValues function
      sum = storedValue / parseFloat(initialValue);
      //   calcDisplay.innerHTML = storedValue / parseFloat(initialValue);
    }
    updateDisplay(sum);
  });
});

/* EQUALS BUTTON FUNCTIONALITY */
equalsBtn.addEventListener("click", (event) => {
  console.log(event.target.value);
});

// const calculateTotal = () => {
// add code here
// }


/* CLEAR BUTTON FUNTIONALITY */
const clearDisplay = (event) => {
  // reset values
  initialValue = ""; /* does this need to be 0 instead of "" */
  updateDisplay(initialValue);
};

clearBtn.addEventListener("click", clearDisplay);

/* DECIMAL BUTTON FUNCTIONALITY */
// stop user from adding more than one decimal point

// OPERATOR FUNCTIONALITY
// const operatorBtn = document.querySelectorAll(".calculator__btn")
// if(operatorBtn === "+"){
//     calcDisplay.innerHTML =
// }

//listen out for input 1
//save the input?
//listen out for the operator
// listen out for the second input
// equals will
//updating the output

// const addValues = (initialValue, secondValue) => {
//     calcDisplay.innerHTML = parseFloat(initialValue)
//     + parseFloat(secondValue);
//     // let sum;
//     // sum = initialValue + secondValue;
//     // calcDisplay.innerHTML = sum;
// };

// -----------------------------------------------------------------------------
// EVENT LISTENERS
// -----------------------------------------------------------------------------

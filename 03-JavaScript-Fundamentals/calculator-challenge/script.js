// Getting DOM Elements
let calcBtnClear = document.querySelector("#clear");
let calcBtnPlusMinus = document.querySelector("#plus-minus");
let calcBtnPercentage = document.querySelector("#percentage");
let calcBtnDivide = document.querySelector("#divide");
let calcBtnMultiply = document.querySelector("#multiply");
let calcBtnSubtract = document.querySelector("#subtract");
let calcBtnAdd = document.querySelector("#add");
let calcBtnDecimal = document.querySelector("#decimal");
let calcBtnEquals = document.querySelector("#equals");

let calcBtnNine = document.querySelector("#nine");
let calcBtnEight = document.querySelector("#eight");
let calcBtnSeven = document.querySelector("#seven");
let calcBtnSix = document.querySelector("#six");
let calcBtnFive = document.querySelector("#five");
let calcBtnFour = document.querySelector("#four");
let calcBtnThree = document.querySelector("#three");
let calcBtnTwo = document.querySelector("#two");
let calcBtnOne = document.querySelector("#one");
let calcBtnZero = document.querySelector("#zero");

//would it be better to select all number buttons using querySelectorAll? 
// document.querySelectorAll(".calculator__btn-num")




// Variables


//listen out for input 1
//save the input?
//listen out for the operator
// listen out for the second input
// equals will 
//updating the output

// Reusable functions
// const clearDisplay = () => {
//     calculator__output.innerHTML = 0;
// }

// const addValues = () => {

// }

// You can also refer to an external "named" function:
// element.addEventListener("click", myFunction);
// function myFunction() {
//   alert ("Hello World!");
// }

// Functions
// Event listener - on click event
calcBtnAdd.addEventListener("click", addValues);

calcBtnClear.addEventListener("click", clearDisplay);
// to display the output --> dynamically changing the inner html of calculator__output

//const updateOutput = (number) => calculator__output.innerHTML = number;

//The conditional operator assigns a value to a variable based on a condition.
//variablename = (condition) ? value1:value2	voteable = (age < 18) ? "Too young":"Old enough";	

// updating output
// for each calculator btn number
//listen out for the value
//update the inner html

//display number
//on click of each button
//display the value in the calculator output

calcBtnThree.addEventListener("click",() {
//
});



// document.getElementById(".calculator__output").innerHTML = "1234";

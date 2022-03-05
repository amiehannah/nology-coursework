/*

1. Set up event listeners 
2. Build an object class containing morse code letters, in Object key:value pairs
3. Able to translate word/s (parameter to pass in)
4. Take word/input -> break it up into an array
5. Format morse code -> contains spaces between each letter and a slash / to separate words
6. Loop through array to convert characters

*/


const userInput = document.querySelector(".input__text");
const outputDisplay = document.querySelector(".output__text");
const clearButton = document.querySelector(".clear__button");
const translateButton = document.querySelector(".translate__button");



// STORE MORSE CODE CHARACTERS IN OBJECT KEY:VALUE PAIRS
class EnglishToMorseCodeChars {
    constructor() {
       this.a = "• -" ,
        this.b = "- • • •" ,
        this.c = "- • - •",
        this.d = "- • •",
        this.e = "•",
        this.f = "• • - •",
        this.g = "- - •",
        this.h = "• • • •",
        this.i = "• •",
        this.j = "• - - -",
        this.k = "- • -",
        this.l = "• - • •",
        this.m = "- -",
        this.n = "- •",
        this.o = "- - -",
        this.p = "• - - •",
        this.q = "- - • -",
        this.r = "• - •",
        this.s = "• • •",
        this.t = "-",
        this.u = "• • -",
        this.v = "• • • -",
        this.w = "• - -",
        this.x = "- • • -",
        this.y = "- • - -",
        this.z = "- - • •"
    }
}

// BUILD A CLASS OF TRANSLATOR



// GET INPUT FROM THE USER
const displayTranslation = () => {
    const usersInputValue  = document.querySelector(".input__text").value;
    outputDisplay.innerHTML = usersInputValue;
}

translateButton.addEventListener("click", displayTranslation);



// CLEAR THE USER INPUT
const resetTranslator = () => {
    userInput.value = "";
    outputDisplay.innerHTML = "";
}

clearButton.addEventListener("click", resetTranslator);


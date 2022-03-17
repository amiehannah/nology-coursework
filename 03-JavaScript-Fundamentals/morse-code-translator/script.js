// // DOM ELEMENTS
const userInput = document.querySelector(".input__text");
const outputDisplay = document.querySelector(".output__text");
const clearButton = document.querySelector(".clear__button");
const translateButton = document.querySelector(".translate__button");
const userInputValue = document.querySelector(".input__text").value;

class Translator {
  constructor() {
      this.a = "•-",
      this.b = "-•••",
      this.c = "-•-•",
      this.d = "-••",
      this.e = "•",
      this.f = "••-•",
      this.g = "--•",
      this.h = "••••",
      this.i = "••",
      this.j = "•---",
      this.k = "-•-",
      this.l = "•-••",
      this.m = "--",
      this.n = "-•",
      this.o = "---",
      this.p = "•--•",
      this.q = "--•-",
      this.r = "•-•",
      this.s = "•••",
      this.t = "-",
      this.u = "••-",
      this.v = "•••-",
      this.w = "•--",
      this.x = "-••-",
      this.y = "-•--",
      this.z = "--••",
      this.translationArr = [],
      this.translation = "",
      this.output = ""
  }

  getWordToTranslate(wordToTranslate) {
    // console.log(wordToTranslate);
    return this.wordToTranslate = wordToTranslate;
  }

  breakDownWord() {
    // console.log(this.wordToTranslate);
    const translationArr = this.wordToTranslate.toLowerCase().split(""); // The split() method splits a string into an array of substrings.
    // console.log(translationArr);
    return this.translationArr = translationArr; // returns an array
  }

  translateInput() {
    const translation = this.translationArr.map((letter) => {
        if (letter !== " ") {
          // console.log(letter);
          return this[letter];
        }
        return "/";
      })
      .join(" ");

    // console.log(translation);
    outputDisplay.innerHTML = translation;

    return this.translation = translation;
  }
  
// NEXT STEP IS DISPLAY THE TRANSLATION IN THE OUTPUT BOX
  displayTranslation() {
    return this.output = this.translation;
  }  

} // this is the end of the class




// // CLEAR THE USER INPUT
const resetTranslator = (ev) => {
  userInput.value = "";
  outputDisplay.innerHTML = "";
};

// EVENT LISTENER - CLEAR BTN
clearButton.addEventListener("click", resetTranslator);


// EVENT LISTENER - TRANSLATE BTN
translateButton.addEventListener("click", () => {
  const userInputValue = document.querySelector(".input__text").value;   //store input text value in variable 

  // create a new translator object
  const translator = new Translator();
  translator.getWordToTranslate(userInputValue);
  translator.breakDownWord();
  translator.translateInput();
  translator.displayTranslation();
  
  return outputDisplay.innerHTML = `${translator.output}`;
})


// /////////////////////////////////////////////////////////

// const translator = new Translator();

// WRAP THIS IN A FUNCTION WHICH TRIGGERS ALL METHODS ON THE CLASS
// translator.getWordToTranslate("bye");
// translator.breakDownWord();
// translator.translateInput();
// translator.displayTranslation();


//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!
// TO DO 
// TIDY UP FILES
// PUSH IT TO GITHUB
// HOW TO EXTEND THE CLASS TO CATER TO MORSE CODE INPUT OR OTHER LANGUAGES (FRENCH?)
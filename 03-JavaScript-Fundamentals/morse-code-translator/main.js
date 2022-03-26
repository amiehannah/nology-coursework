// // // DOM ELEMENTS
const userInput = document.querySelector(".input__text");
const outputDisplay = document.querySelector(".output__text");
const clearButton = document.querySelector(".clear__button");
const translateButton = document.querySelector(".translate__button");
const userInputValue = document.querySelector(".input__text").value;
const errorMsg = document.querySelector(".error-msg");

const alphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

const morseAlphabet = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

class Translator {
  constructor() {
    this.alphabet = alphabet,
    this.morseAlphabet = morseAlphabet,
    this.translationArr = [],
    this.translation = "",
    this.output = "",
    this.wordToTranslate = ""
  }

  getWordToTranslate(word) {
    this.wordToTranslate = word;
    return this.wordToTranslate;
  }

  breakDownWord() {
    // console.log(this.wordToTranslate);
    const translationArr = this.wordToTranslate.toLowerCase().split(""); // The split() method splits a string into an array of substrings.
    // console.log(translationArr);
    return (this.translationArr = translationArr); // returns an array
  }

  translateInput() {
    console.log(this.translationArr);
    const translation = this.translationArr
      .map((letter) => {
        // console.log(alphabet[letter]);
        if (letter !== " ") {
          return alphabet[letter];
        }
        return "/";
      })
      .join(" ");

    console.log(translation);
    outputDisplay.innerHTML = translation;

    return (this.translation = translation);
  }

  displayTranslation() {
    return (this.output = this.translation);
  }
}

// // CLEAR THE USER INPUT
const resetTranslator = (ev) => {
  userInput.value = "";
  outputDisplay.innerHTML = "";
};

// EVENT LISTENER - CLEAR BTN
clearButton.addEventListener("click", resetTranslator);

// // EVENT LISTENER - TRANSLATE BTN
translateButton.addEventListener("click", () => {
  const userInputValue = document.querySelector(".input__text").value; //store input text value in variable
  
if (userInputValue === "") {
  userInput.innerHTML = "Please add message to translate";
  } else {
// VALIDATE INPUT 
const checkInputRegEx =  /[a-zA-Z]/gm;
if(checkInputRegEx.test(userInputValue)) {
  const englishTranslateToMorse = new Translator();
  englishTranslateToMorse.getWordToTranslate(userInputValue);
  englishTranslateToMorse.breakDownWord();
  englishTranslateToMorse.translateInput();
  englishTranslateToMorse.displayTranslation();
    return (outputDisplay.innerHTML = `${englishTranslateToMorse.output}`);
} else {
  const morseTranslateToEnglish = new MorseToEnglish();
  morseTranslateToEnglish.getWordToTranslate(userInputValue);
  morseTranslateToEnglish.breakDownMorseWord();
  morseTranslateToEnglish.translateMorseToEng();
  morseTranslateToEnglish.displayTranslation();
  return (outputDisplay.innerHTML = `${morseTranslateToEnglish.output}`);
}
  }
});

// EXTEND CLASS TO TRANSLATE MORSE CODE
class MorseToEnglish extends Translator {
  constructor() {
    super();
  }
  breakDownMorseWord() {
    // console.log(this.wordToTranslate);
    const translationArr = this.wordToTranslate.split(" ");
    // console.log(translationArr);
    return (this.translationArr = translationArr); // returns an array
  }

  translateMorseToEng() {
    // console.log(this.translationArr);

    const translation = this.translationArr.map((element) => {
      console.log(element);
      if (element !== "/") {
        return morseAlphabet[element];
      }
      return " ";
    })
    .join("");
       
  console.log(translation);
  const capitaliseStr = translation.charAt(0).toUpperCase() + translation.slice(1);
  outputDisplay.innerHTML = capitaliseStr;
  return (this.translation = capitaliseStr);
  }
}




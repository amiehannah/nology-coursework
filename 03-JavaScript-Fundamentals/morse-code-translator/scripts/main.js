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
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  ":": "---...",
  ";": "-.-.-.",
  "/": "-..-.",
  " ": "/",
  "-": "-....-",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  "'": ".----."
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
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "---...": ":",
  "-.-.-.": ";",
  "-.-.--": "!",
  "-....-": "-",
  "/": " ", 
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  ".----.": "'"
};
class Translator {
  constructor() {
    (this.alphabet = alphabet),
      (this.morseAlphabet = morseAlphabet),
      (this.translationArr = []),
      (this.translation = ""),
      (this.output = ""),
      (this.wordToTranslate = "");
  }

  // getWordToTranslate(word) {
  //   this.wordToTranslate = word;
  //   return this.wordToTranslate;
  // }

  translateInput(userInputValue) {
    this.wordToTranslate = userInputValue;
    const translationArr = this.wordToTranslate.toLowerCase().split("");
    this.translationArr = translationArr;
    console.log(this.translationArr);
    const translation = this.translationArr
      .map((character) => {
        return alphabet[character] ? alphabet[character] : character;
      })
      .join(" ");

    console.log(translation);
    this.translation = translation;
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
    userInput.innerHTML = "Please add message to translate!";
  } else {
    // const checkInputRegEx = /[^\s0-9a-zA-Z]+/g;
    const checkInputRegEx = /[^\s0-9a-zA-Z'\/(,:;&?!)-]/gm;
    console.log(checkInputRegEx.test(userInputValue));
    if (checkInputRegEx.test(userInputValue)) {
      const morseTranslateToEnglish = new MorseToEnglish();
      // morseTranslateToEnglish.getWordToTranslate(userInputValue);
      morseTranslateToEnglish.translateMorseToEng(userInputValue);
      return (outputDisplay.innerHTML = `${morseTranslateToEnglish.output}`);
    } else {
      const englishTranslateToMorse = new Translator();
      // englishTranslateToMorse.getWordToTranslate(userInputValue);
      englishTranslateToMorse.translateInput(userInputValue);
      return (outputDisplay.innerHTML = `${englishTranslateToMorse.output}`);
    }
  }
});

// EXTEND CLASS TO TRANSLATE MORSE CODE
class MorseToEnglish extends Translator {
  constructor() {
    super();
  }

  translateMorseToEng(userInputValue) {
    this.wordToTranslate = userInputValue;
    const translationArr = this.wordToTranslate.split(" ");
    console.log(translationArr);
    this.translationArr = translationArr;
    const translation = this.translationArr
      .map((element) => {
        // console.log(element);
        // if (element !== "/") {
        //   return morseAlphabet[element];
        // }
        // return " ";

        return morseAlphabet[element] ? morseAlphabet[element] : element;

      })
      .join("");

    console.log(translation);
    const capitaliseStr =
      translation.charAt(0).toUpperCase() + translation.slice(1);
    this.translation = capitaliseStr;
    return (this.output = this.translation);
  }
}

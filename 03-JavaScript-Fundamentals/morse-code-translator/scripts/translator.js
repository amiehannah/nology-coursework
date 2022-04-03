
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

export class Translator {
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


// EXTEND CLASS TO TRANSLATE MORSE CODE
export class MorseToEnglish extends Translator {
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
      //   console.log(element);
      //   if (element !== "/") {
      //     return morseAlphabet[element];
      //   }
      //   return " ";
      // })
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

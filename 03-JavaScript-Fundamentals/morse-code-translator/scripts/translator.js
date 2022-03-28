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
      // outputDisplay.innerHTML = translation;
  
      return (this.translation = translation);
    }
  
    displayTranslation() {
      return (this.output = this.translation);
    }
  }


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
    // outputDisplay.innerHTML = capitaliseStr;
    return (this.translation = capitaliseStr);
    }
  }
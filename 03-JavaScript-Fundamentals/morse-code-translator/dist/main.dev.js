"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// // // DOM ELEMENTS
var userInput = document.querySelector(".input__text");
var outputDisplay = document.querySelector(".output__text");
var clearButton = document.querySelector(".clear__button");
var translateButton = document.querySelector(".translate__button");
var userInputValue = document.querySelector(".input__text").value;
var errorMsg = document.querySelector(".error-msg");
var alphabet = {
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
  z: "--.."
};
var morseAlphabet = {
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
  "--..": "z"
};

var Translator =
/*#__PURE__*/
function () {
  function Translator() {
    _classCallCheck(this, Translator);

    this.alphabet = alphabet, this.morseAlphabet = morseAlphabet, this.translationArr = [], this.translation = "", this.output = "", this.wordToTranslate = "";
  }

  _createClass(Translator, [{
    key: "getWordToTranslate",
    value: function getWordToTranslate(word) {
      this.wordToTranslate = word;
      return this.wordToTranslate;
    }
  }, {
    key: "breakDownWord",
    value: function breakDownWord() {
      // console.log(this.wordToTranslate);
      var translationArr = this.wordToTranslate.toLowerCase().split(""); // The split() method splits a string into an array of substrings.
      // console.log(translationArr);

      return this.translationArr = translationArr; // returns an array
    }
  }, {
    key: "translateInput",
    value: function translateInput() {
      console.log(this.translationArr);
      var translation = this.translationArr.map(function (letter) {
        // console.log(alphabet[letter]);
        if (letter !== " ") {
          return alphabet[letter];
        }

        return "/";
      }).join(" ");
      console.log(translation);
      outputDisplay.innerHTML = translation;
      return this.translation = translation;
    }
  }, {
    key: "displayTranslation",
    value: function displayTranslation() {
      return this.output = this.translation;
    }
  }]);

  return Translator;
}(); // // CLEAR THE USER INPUT


var resetTranslator = function resetTranslator(ev) {
  userInput.value = "";
  outputDisplay.innerHTML = "";
}; // EVENT LISTENER - CLEAR BTN


clearButton.addEventListener("click", resetTranslator); // // EVENT LISTENER - TRANSLATE BTN

translateButton.addEventListener("click", function () {
  var userInputValue = document.querySelector(".input__text").value; //store input text value in variable

  if (userInputValue === "") {
    userInput.innerHTML = "Please add message to translate";
  } else {
    // VALIDATE INPUT 
    var checkInputRegEx = /[a-zA-Z]/gm;

    if (checkInputRegEx.test(userInputValue)) {
      var englishTranslateToMorse = new Translator();
      englishTranslateToMorse.getWordToTranslate(userInputValue);
      englishTranslateToMorse.breakDownWord();
      englishTranslateToMorse.translateInput();
      englishTranslateToMorse.displayTranslation();
      return outputDisplay.innerHTML = "".concat(englishTranslateToMorse.output);
    } else {
      var morseTranslateToEnglish = new MorseToEnglish();
      morseTranslateToEnglish.getWordToTranslate(userInputValue);
      morseTranslateToEnglish.breakDownMorseWord();
      morseTranslateToEnglish.translateMorseToEng();
      morseTranslateToEnglish.displayTranslation();
      return outputDisplay.innerHTML = "".concat(morseTranslateToEnglish.output);
    }
  }
}); // EXTEND CLASS TO TRANSLATE MORSE CODE

var MorseToEnglish =
/*#__PURE__*/
function (_Translator) {
  _inherits(MorseToEnglish, _Translator);

  function MorseToEnglish() {
    _classCallCheck(this, MorseToEnglish);

    return _possibleConstructorReturn(this, _getPrototypeOf(MorseToEnglish).call(this));
  }

  _createClass(MorseToEnglish, [{
    key: "breakDownMorseWord",
    value: function breakDownMorseWord() {
      // console.log(this.wordToTranslate);
      var translationArr = this.wordToTranslate.split(" "); // console.log(translationArr);

      return this.translationArr = translationArr; // returns an array
    }
  }, {
    key: "translateMorseToEng",
    value: function translateMorseToEng() {
      // console.log(this.translationArr);
      var translation = this.translationArr.map(function (element) {
        console.log(element);

        if (element !== "/") {
          return morseAlphabet[element];
        }

        return " ";
      }).join("");
      console.log(translation);
      outputDisplay.innerHTML = translation;
      return this.translation = translation;
    }
  }]);

  return MorseToEnglish;
}(Translator);
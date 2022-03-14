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
      this.z = "--••"
      // this.translationArr = []
  }

  getWordToTranslate(wordToTranslate) {
    // console.log(wordToTranslate);
    return this.wordToTranslate;
  }

  breakDownWord(wordToTranslate) {
    const translationArr = wordToTranslate.toLowerCase().split(""); // The split() method splits a string into an array of substrings.
    console.log(translationArr);
    return translationArr; // returns an array
  }

  translateToMorse(translationArr) {
    // const wordToTranslate = `${userInputValue}`;
    // console.log(typeof wordToTranslate);
    // const translationArr = wordToTranslate.toLowerCase().split(""); // The split() method splits a string into an array of substrings.

    const translateInput = translationArr.map((letter) => {
        if (letter !== " ") {
          // console.log(letter);
          return this[letter];
        }
        return "/";
      })
      .join(" ");

    // console.log(translateInput);
    outputDisplay.innerHTML = translateInput;
    return translateInput;
  }
}


/*
let translator = new Translator();

return outputDisplay.innerHTML = 
*/



const translator = new Translator();
translator.translateToMorse("amie edwards");


translator.getWordToTranslate("hello");
translator.breakDownWord("bye");

// translator.getWordToTranslate(`${userInputValue}`);

// /////////////////////////////////////////////////////////
// STEPS
// 1. WHEN TRANSLATE BUTTON IS CLICKED - event listener
// 2. GET THE INPUT TYPED INTO THE INPUT__TEXT BOX AND STORE THIS IN VARIABLE 'wordToTranslate'
// 3. Validation check? IS there an input to get - (i.e. if you click translate and input is empty display an error message - ask user to enter their input to translate)
// 4. Work out translation - DONE
// 5. Display the translation in the output box
// 6. Clear button to remove all the content from the page - DONE
// 7. ONCE this is working -> look to add a further method which translates from morse back to english


// translator.translateToMorse(userInputValue);

// /////////////////////////////////////////////////////////

// // GET INPUT FROM THE USER
// translateButton.addEventListener("click", () => {
//     console.log(userInput.value);

//  ON CLICK RUN THE TRANSLATETOMORSE FUNCTION
//     translator.translateToMorse(userInputValue);
// });

const displayTranslation = () => {
  const usersInputValue = document.querySelector(".input__text").value;
  // const wordArr = usersInputValue.split();
  outputDisplay.innerHTML = translateInput;
//   translator.translateToMorse();
};

// // CLEAR THE USER INPUT
const resetTranslator = () => {
  userInput.value = "";
  outputDisplay.innerHTML = "";
};

// EVENT LISTENERS
clearButton.addEventListener("click", resetTranslator);


// translateButton.addEventListener("click", translateToMorse());
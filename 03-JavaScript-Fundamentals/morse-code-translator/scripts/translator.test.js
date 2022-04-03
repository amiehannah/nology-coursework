// import {add function name in here} from "./main.js";
import { Translator } from "./translator.js";
import { MorseToEnglish } from "./translator.js";

describe('Tests to determine whether a translator successfully converts an English input to Morse code', () => { 

    it("Should return the correct alphabet character", () => {
        const translator = new Translator();
        const alphabetLetter = translator.alphabet.a;
        expect(alphabetLetter).toBe(".-");
    })
    
    it("Should return the correct alphabet character", () => {
        const translator = new Translator();
        const alphabetLetter = translator.alphabet.z;
        expect(alphabetLetter).toBe("--..");
    })


    //TESTING THE TRANSLATION
    it("Should translate a letter in English, to morse characters", () => {
        const translator = new Translator();
        const testTranslate = translator.translateInput("k");
        expect(testTranslate).toStrictEqual("-.-");
    })

    it("Should translate a word in English, to the Morse code equivalent", () => {
        const translator = new Translator();
        const testTranslate = translator.translateInput("hEllo");
        expect(testTranslate).toStrictEqual(".... . .-.. .-.. ---");
    })

    it("Should translate a sentence in English that contains numbers, to the Morse code equivalent", () => {
        const translator = new Translator();
        const userInputValue ="The 20 best holiday destinations in April & May"
        const testTranslate = translator.translateInput(userInputValue)
        expect(testTranslate).toStrictEqual("- .... . / ..--- ----- / -... . ... - / .... --- .-.. .. -.. .- -.-- / -.. . ... - .. -. .- - .. --- -. ... / .. -. / .- .--. .-. .. .-.. / .-... / -- .- -.--")
    })

    it("Should translate a sentence in English with punctuation, to the Morse code equivalent", () => {
        const translator = new Translator();
        const userInputValue ="Do any countries allow travel without a Covid vaccine?!"
        const testTranslate = translator.translateInput(userInputValue)
        expect(testTranslate).toStrictEqual("-.. --- / .- -. -.-- / -.-. --- ..- -. - .-. .. . ... / .- .-.. .-.. --- .-- / - .-. .- ...- . .-.. / .-- .. - .... --- ..- - / .- / -.-. --- ...- .. -.. / ...- .- -.-. -.-. .. -. . ..--.. -.-.--")
    })

    it("Should translate a sentence in English with punctuation, to the Morse code equivalent", () => {
        const translator = new Translator();
        const userInputValue ="Open: 8am-11pm, Mon-Thu; 8am-1am, Fri; 9am-1am Sat; 9am-11pm, Sun"
        const testTranslate = translator.translateInput(userInputValue)
        expect(testTranslate).toStrictEqual("--- .--. . -. ---... / ---.. .- -- -....- .---- .---- .--. -- --..-- / -- --- -. -....- - .... ..- -.-.-. / ---.. .- -- -....- .---- .- -- --..-- / ..-. .-. .. -.-.-. / ----. .- -- -....- .---- .- -- / ... .- - -.-.-. / ----. .- -- -....- .---- .---- .--. -- --..-- / ... ..- -.")
    })

});


describe('Tests to determine whether a translator successfully converts a Morse Code Input to the English equivalent', () => { 
    // CHECK MORSE ALPHABET
    it("Should return the correct alphabet character", () => {
        const translator = new Translator();
        const morseCharacter = translator.morseAlphabet[".---"];
        expect(morseCharacter).toBe("j");
    })

    //TESTING THE TRANSLATION
    it("Should translate a character in Morse Code, to an English letter", () => {
            const morseTranslator = new MorseToEnglish();
            const userInputValue = "--.-";
            const testTranslate = morseTranslator.translateMorseToEng(userInputValue);
            expect(testTranslate).toBe("Q"); //case sensitive
        })

        it("Should translate a word in Morse Code, to English", () => {
            const morseTranslator = new MorseToEnglish();
            const userInputValue = "-.-. .... .-. .. ... - -- .- ...";
            const testTranslate = morseTranslator.translateMorseToEng(userInputValue);
            expect(testTranslate).toStrictEqual("Christmas"); //case sensitive
        })

        it("Should translate a sentence in Morse Code including punctuation and numbers, to English", () => {
            const morseTranslator = new MorseToEnglish();
            const userInputValue = ".--. --- .-. - .-- .- .-.. .-.. / .--. .-.. .- -.-. . --..-- / .--. --- .-. - .-- .- .-.. .-.. / .-.. -. --..-- / .-. . -.. -.-. .-.. .. ..-. ..-. . --..-- / -... .-. .. ... - --- .-.. / -... ... .---- / -.... -. .- .-.-.- / .--. .... --- -. . ---... / ----- ...-- ...-- ----- / .---- ..--- ---.. / .---- ..... ---.. -----";
            const testTranslate = morseTranslator.translateMorseToEng(userInputValue);
            expect(testTranslate).toStrictEqual("Portwall place, portwall ln, redcliffe, bristol bs1 6na. phone: 0330 128 1580"); //case sensitive
        })
})


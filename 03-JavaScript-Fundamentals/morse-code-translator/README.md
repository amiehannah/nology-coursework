Task:
To create a morse code translator using OOP.
The classes used should store all the information needed to translate between Morse code and English (and back again) including alphabets, the word to translate and the eventual output.


Breaking down the problem -->
- The user needs to be able to input a value 
- On clicking the translate button, the input is translated to morse and displayed on the page
- Reset button allows user to clear the display and reuse the translator.
- Additionally if user adds Morse code, translator should be able to translate this to the English equivalent


Approach: 
- Stored the alphabets (english and morse code) in objects, with key value pairs.
- Created a class of Translator, binding the alphabets to the class.
- Created methods for each step of the translation, firstly returning the users input. 
- Next breaking down the input, turning it into an array to enable the input to be looped over during the translate method.
- The Translate input method, uses map() to iterate over the translation array and returns the values from the alphabet object. If the input contains a space (i.e. between words) return/replace it with a '/' which is commonly seen in Morse Code.
- Display the translation in the output box.
- This is all triggered by the click event taking place on the 'Translate' button, which creates a new instance of the Translator class and triggers a sequence of methods on the class.
- Once I had the English to Morse functionality working, I then wanted to be able to translate a Morse input back to English.
- By extending the Translator class it allows the MorseToEnglish class to inherit any properties and methods from the parent class that could be reused.
- I had to add a few unique methods to the MorseToEnglish class as breaking down the morse input required different steps, as did translating the input.
- Finally in the 'Translate' button event listener I added a regular expression and if statement to validate the input, searching for the correct character combinations in the input string and triggering either an English or Morse translation based on the input characters.


UI:
- I created a textured gradient mesh in Illustrator which I've then applied to the background and added a horizontal ticker.


Unit Testing:
- Unit Testing to check my methods on the class of Translator.
- I've written tests to check if my translator could successfully translate: characters, words and sentences.
- My initial code was then refactored to enable it to handle some basic punctuation and numerical values 0-9, as my test initially revealed that these hadn't been accounted for.
- Hopefully this has enabled my translator to be more robust.

Next Steps:
- Extend the classes to be able to translate other languages.
- Format the text outputs, ensuring that capitalised values are structured after every full stop and that values such as 'I' are capitalised etc.



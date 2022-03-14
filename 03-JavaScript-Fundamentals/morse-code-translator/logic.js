class Translator {
    constructor(word) {
        this.word = word,
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
    getWordToTranslate() {
        return this.word;
    }
    breakDownWord() {
        const strToLowerCase = this.word.toLowerCase();
        const formatStr = strToLowerCase.replace(/\s+/g, '/'); /* REPLACE WHITESPACE WITH A SLASH USING REGEX'/' */
        const wordToArr = formatStr.split(""); // ARRAY METHOD TO SPLIT STRING

       

        // LOOP THROUGH wordToArr ARRAY
        // const map1 = wordToArr.map((element, index) => {
        //     return `${element} is at index ${index}`;
        // })

         // FOR EACH LETTER IN WORD CHECK FOR A MATCH IN THE KEY:VALUE PAIRS OF THE TESTTRANSLATION OBJECT
        
        const letters = ["a", "m", "i", " ", "e"];
        letters.forEach(letter => {
            // console.log(letter);
            console.log(this[letter]);
        })
        // THINK HOW DO YOU ACCESS THE ITEMS WITHIN AN OBJECT - dot notation or bracket notation
        // person.name
        // person[name]
      
        // LOOP THROUGH THE OBJECT TESTTRANSLATION
        // const keys = Object.keys(testTranslation);
        // keys.forEach((key) => {
        //     console.log(`${key}: ${testTranslation[key]}`);
        // });

        // WOULD THE STATIC METHOD entries WORK BETTER?
        // Object.values(testTranslation).forEach(val => console.log(val));
        
        // IF A MATCH IS FOUND, REPLACE THE ENGLISH KEY WITH THE MORSE CODE VALUE
        // string.replace(searchValue, newValue)

        // return map1;
    }
}

// TO TEST IT WORKS
const translator = new Translator("Amie Edwards");
// translator.translateToMorse('AMIE EDWARDS');
// translator.translateToMorse('ANDY EVANS');

// console.log(Object.keys(testTranslation));

// console.log(testTranslation.getWordToTranslate());

console.log(translator.breakDownWord());



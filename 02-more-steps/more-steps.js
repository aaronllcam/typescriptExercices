//1 - Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
const translate = function (str) {
    let result = '';
    str = str.toLowerCase();
    let regEx = new RegExp('a|e|i|o|u|" "', 'g');
    console.log(regEx);
    for (let i = 0; i < str.length; i++) {
        let character = str.slice(i, i + 1);
        // character.match(regEx);
        if(character.match(regEx) === null){
            character = character + 'o' + character;
            // console.log(character);
        }
        result += character;
        
    }
    console.log(result);
};

translate("this is fun");

//2 - Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
 const sumar = (arr) => {
     let result = 0;
     arr.forEach(element => {
         result += element;
     });
     console.log(result);
 }

 const mult = (arr) => {
     let result = 1;
     arr.forEach(element => {
         result *= element;
     })
     console.log(result);
 }
 sumar([1,2,3,4])
 mult([1,2,3,4,1])

 //3 - Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
 const reverse = (str) => {
    let result = "";
    for(let i=str.length; i>0; i--){
        result += str.slice(i-1,i);
    }
    console.log(result);
 }
 reverse("holA preSidente")

 //4 -palindromo:
 const palindrome = (str) => {
    let reverseStr = "";
    str = str.toLowerCase().replace(/ /g,'');
    for(let i=str.length; i>0; i--){
        reverseStr += str.slice(i-1,i);
    }
    // console.log(str);
    // console.log(reverseStr);
    if(str === reverseStr) console.log("palindromo")
    else console.log("No es palindromo");
 }
 palindrome("A Bali su flan anal fusilaba");
 //5 - Pendiente

 //6 - Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

 const findLongestWorld = (arr) => {
    let strLength = 0;
    arr.forEach(element => {
        //  if(element.length > strLength) strLength = element.length; 
         element.length > strLength ? strLength = element.length : strLength = strLength;
    })
    return strLength;

 }
 console.log(findLongestWorld(['hola', 'que', 'pasada', 'tio', 'mec', 'hftrwghdftywfdt']));

 //7 - Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
 const filterOflength = (arr, lengthStr) => {
    const result = [];
    arr.forEach(element => {
        // console.log(element.length);
        if(element.length > lengthStr ) result.push(element) 
        // console.log(result);
    })
    return result;
 }

 console.log(filterOflength(['hola', 'que', 'pasada', 'tio', 'mec', 'hftrwghdftywfdt'], 8));

//8 - Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

const charFreq = (str) => {
    str = str.toLowerCase().replace(/ /g,'');
    const charFreq = {
        char: '',
        frequency: 0
    };
    const array = [];
    for(let i=0; i<str.length; i++){
        charFreq.char = '';
        charFreq.frequency = 0;
        console.log("charFreq init", charFreq);
        let cont = 0;
        let ch = str.slice(i,i+1);
        for(let j=0; j < str.length; j++){
            if(ch === str.slice(j,j+1)){
                cont++;
            }
            
        }
        charFreq.char = ch;
        charFreq.frequency = cont;
        console.log("hOLA", charFreq);
        console.log(array);
        if( array.find(element => element.char === ch) === undefined){
            array.push(charFreq)
        }
        
    }
    console.log("Result: ",array);

}
console.log("EJERCICIO 7");
charFreq("ABBCDDEDE");
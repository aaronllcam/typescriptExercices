//1 - Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1
const listIntegers = (x1, x2) => {
    let result = [];
    if(x1 > x2){
        return -1;
    }else if(x1 > 0){
        
        for(let i=0; i<x2; i++){
            result.push(x1+i);
        }
        
        return result;
    }else if(x1 < 0){
        let init = x1 + 1;
        for(let i=init; i<x2-init; i++){
            result.push(x1+i);
        }
        return result;
    }else{
        for(let i=0; i<x2+1; i++){
            result.push(x1+i);
        }
        return result;
    }

}

const res = listIntegers(0,5);
console.log(...res);

//2 - Write a function that writes in the console the multiplication table (from 1 to 10)
const multTable = () => {
    let result = [];
    for(let i=1; i<=10; i++){
        for(let j=1; j<=10; j++){
            result.push(i*j);
        }
        console.log(...result);
        result = [];

    }
}

multTable();

//3 - Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter
/* const multTableNum = (num) => {
    let result = []
    for(let i=1; i<=10; i++){
        result.push(num*i);
    }
    return result;
}
let num;
do{
    const enterKeyboard = window.prompt("Introduce un numero");
    console.log(typeof(enterKeyboard));
    num  = Number.parseInt(enterKeyboard);
    console.log(typeof(num));
    
}while(isNaN(num));

const multi = multTableNum(num);
console.log(...multi); */

//4 - Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

const sumMultiplyOf23 = () => {
    const result = [];
    let suma = 0;
    for(let i=0; i<=500; i++){
        if(i%23 == 0){
            result.push(i);
            suma += i;
        }
    }
    console.log(...result);
    console.log(suma);

}
sumMultiplyOf23();

//5 - Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
const max = (a,b) => {
    if(a>b) return a;
    else if(b>a) return b;
    else return -1;
}
const maximo = max(100, 10);
console.log(maximo);

//6 - Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
const maxOfThree = (a,b,c) => {
    if(a > b && a > c) console.log(a);
    else if(b>a && b> c) console.log(b);
    else console.log(c);
}
maxOfThree(7,15,7);

//6 - Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel2 = (a) => {
    let regEx = new RegExp('[a-z]', 'g');
    if(a.length > 1){
        console.log("no es una vocal");
    }else{
        if(a.search(regEx) != -1) console.log("contains");
        else console.log("Not contains");
    }

}
isVowel2('o');

//7 - Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code
const hexToRgb = (colorHex) => {
    colorHex = colorHex.split('#')[1];
    let r = parseInt(colorHex.slice(0,2), 16);
    let g = parseInt(colorHex.slice(2,4), 16);
    let b = parseInt(colorHex.slice(4,6), 16);

    console.log(`rgb(${r},${g},${b})`);

}
hexToRgb('#00AAFF');



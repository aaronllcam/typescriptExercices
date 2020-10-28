//1 - fibonacci

const fibo = (num:number):Array<number> => {
    let result: number = 1;
    let acum:Array<number> = [0,1];
    
    for(let i=1; i<=num; i++){
        result = acum[i] + acum[i-1];
        acum.push(result);
    }
    console.log(...acum);
    return acum;

}
fibo(7);

//2 - Define a function called add with a single argument input. The input to the function will be a string containing a comma-separated list of numbers. The function must return the sum of the numbers. e.g.

const sumaString = (str:string):number => {
    let result:number = 0;
    const strArray = str.split(',');

    strArray.forEach( element => {
        result += parseInt(element);
    })
    console.log(strArray);
    console.log(result);

    return result;

}

sumaString("1,2,3,hola");

//3 - reverse number

const reverseNumber = (num:number):any => {
    const numToStr: string = num.toString();
    return numToStr.split("").reverse().join("");
}

console.log(reverseNumber(123));

//4 - ispalindrome;
const isPalindrome = (str:string):boolean => {
    const isPalindrome:boolean = false;
    const regEx = new RegExp(' ', 'gi')
    str = str.toLowerCase().replace(regEx, '');
    console.log(str.split("").reverse().join(""));
    console.log(str);
    if(str.split("").reverse().join("") === str){
        
        return true;
    }

    return isPalindrome;


}
console.log(isPalindrome("Alli ves Sevilla"));

//5 - sort letters
const sortLetters = (str:string):string => {
    const regEx = new RegExp(' ', 'ig');
    return str.replace(regEx, '').split("").sort().join("");

}
console.log(sortLetters("ho,la que pasas"));

//6  - text capitalized
const textCapitalized = (str:string):string => {
    return str.replace(/\w\S*/g, word =>  {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        }
      );

}
console.log(textCapitalized("hola como estas"));

//6 - longest word
const longestWord = (str:string):string => {
    let maxWord:string = "";
    str.split(" ").forEach(word => {
        if(word.length > maxWord.length)
            maxWord = word;
    });
    return maxWord;
}

console.log(longestWord("web Development tool"));

//8 - How many vowels

const howManyVowels = (str:string):number => {
    let count:number = 0;
    let regEx = new RegExp('a|e|i|o|u', 'gi');

    str = str.toLowerCase();
    for(let i=0; i<str.length; i++){
        if(str.charAt(i).match(regEx)) count++;
    }
    return count;

}

console.log(howManyVowels("cuantas vocales hay"));

//9 - isPriume
const isPrime = (num:number):boolean => {
    let isPrime:boolean = false;
    let count:number = 0;

    for(let i=1; i<=num; i++){
        if(num%i == 0){
            count++
        }
    }
    if(count == 2){
        return isPrime=true;
    }


    return isPrime;

}

console.log(isPrime(1));

const whatType = (val:any):any => {
    console.log(`${val} is the type ${typeof(val)} `);
}
whatType(5)

//10 - first and second greates
const moreGreatest = (args:Array<number>):Array<number> => {

    args.sort( (a,b) => {
        return a-b;
    }).slice(0,2)
    console.log(args.slice(0,2));
    return args.slice(0,2);
}
moreGreatest([1,5,67,43,3])

//11 -is perfect?

const isPerfect = (numb:number):boolean => {
    let isPerfect = false;
    let sum:number = 0;
    for(let i=0; i<numb; i++){
        if(numb%i == 0){
            sum += i;
        }
    }
    if(sum === numb) return isPerfect = true;
    return isPerfect;
}

console.log(isPerfect(496));

//11 -coinfy convert
const coinfy = (pay:number, coin:Array<number>) => {
    let cont25:number = 0;
    let cont10:number = 0;
    let cont5:number = 0;
    let cont2:number = 0;
    let cont1:number = 0;

    while(pay>0){
        if(pay>=25){
            pay = pay -25;
            cont25++
        }else if(pay >= 10){
            pay = pay - 10;
            cont10++;
        }else if(pay >= 5){
            pay = pay - 5;
            cont5++;
        }else if(pay>=2){
            pay = pay - 2;
            cont2++;
        }else{
            pay = pay - 1;
            cont1++
        }
    }

    console.log("25: ", cont25);
    console.log("10: ", cont10);
    console.log("5: ", cont5);
    console.log("2: ", cont2);
    console.log("1: ", cont1);
}
coinfy(50, [10,2]);

//12 - UNIQUE CHARACTRES EXTRACT REPETED CHARACTERS
/* const uniqueCharacter = (str:string):string => {

    
} */
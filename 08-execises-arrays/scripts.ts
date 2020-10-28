//1  - Write a JavaScript function to clone an array.

const arrayClone = (arr:Array<any>):Array<any> => {
    let arrayClone = [...arr];

    return arrayClone;
}

// console.log(arrayClone([1,2,[4,0,7], {"key":"main"}]));

//2 - Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.


const firsElementsOfArray = (arr:Array<any>, offset?:number):any => {
    if(arr.length != 0){
        if(offset == undefined){
            return arr;
        }else if(offset > 1){
            return arr.slice(0, offset);
        }else{
            return arr[0];
        }
    }
    return arr;
}

// console.log(firsElementsOfArray([1,3,4,5,6,8],5));

//3 - Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

const lastElementOfArray = (arr:Array<any>, offset?:number):any => {
    if(arr.length != 0){
        if(offset == undefined){
            return arr;
        }else if(offset > 1){
            return arr.slice(-offset);
        }else{
            return arr[arr.length-1];
        }

    }
    return arr;
}
//  console.log(lastElementOfArray([1,2,3,4,5,6,7,8,98],3));

//4 - Write a simple JavaScript program to join all elements of the following array into a string.

const arrayToString = (arr:Array<string>):string => {
    return arr.join(' - ');
}

// console.log(arrayToString(["hola","como","estas"]));

//5 - Write a JavaScript program to sort the items of an array.

const sortArray = (arr:Array<number>):Array<number> => {
    let sorted:Array<number> = arr.sort(function(a,b){
        return a - b;
    })
    return sorted;
}

// console.log(sortArray([1,58,100,25,5,-32,-3,154,85]));

//6 - Write a JavaScript program to find the most frequent item of an array.

// const mostFrequentItem = (arr:Array<any>):any => {

// }

//7 - Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const swapCase = (str:string):string => {
    let result = str.split('').map(function(c){
        return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
      }).join('')
    return result;

}

// console.log(swapCase("hOla Que pasa"));

//8 - Write a JavaScript program to find the sum of squares of a numeric vector.

const sumSquaresofArray = (arr:Array<number>):number => {
    let result:number;

    let squares:Array<number> = arr.map(function(element:number){
        return Math.pow(element,2);
    });
    result = squares.reduce((a, b) => a + b);
    return result;

}

// console.log(sumSquaresofArray([1,2,3,4]));

//9 - Write a JavaScript program to compute the sum and product of an array of integers.
const sumArray = (arr:Array<number>):number => {

    return arr.reduce((a, b) => a + b);
}
const multArray = (arr:Array<number>):number => {

    return arr.reduce((a, b) => a * b);
}

/* console.log(sumArray([1,2,3,4,5,6]));
console.log(multArray([1,2,3,4,5,6])); */

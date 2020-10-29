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

//10 - Write a JavaScript program to add items in an blank array and display the items.

/* let input:any;
let exit:any;
let arr:Array<any> = [];
do{
    input = prompt('Introduce un elemento');
    arr.push(input);
    exit = prompt('Introduce s para salir, pulsa enter para continuar');
    console.log(arr);
    
}while(exit.toLowerCase !== 's'); */

//11 - Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
function onlyUnique(value, index, self) { 
    /* console.log(value);
    console.log(index);
    console.log(self);
    console.log(self.indexOf(value));
    console.log(self.indexOf(value) === index); */
    //Funcionamiento:
    //si el elemento (value) del array esta duplicado nos retornara el primer indice que encuentre de ese valor y por lo tanto la condicion del
    //return será false, si no exliste duplicado, no lo encuentra antes y el valor del indice encontrado con indexOf es el mismo que el index (posicion en la que se encuentra e elemento)
    //y por lo tanto la condicion del return sera true y significa que no esta duplicado
    //Este resultado lo usamos confuntamente con la funcion filter
    return self.indexOf(value) === index;
}
const a = ['a', 1, 'a', 2, '1'];
const unique = a.filter( onlyUnique );
// console.log(unique)

//12 - Find the leap years in a given range of years.

const showLeapYears = (starYear:number, endYear:number):Array<number> => {
    const leapYears:Array<number> = [];
    while(starYear <= endYear){
        // console.log(starYear);
        if((starYear % 4 == 0 && starYear % 100 != 0) || starYear % 400 == 0) leapYears.push(starYear); 
        starYear++;
    }
    return leapYears;
}
// console.log(showLeapYears(1900, 2000));

//13 - Write a JavaScript program to shuffle an array.

const sortRandomArray = (arr:Array<number>):Array<number> => {
    return arr.sort(() => Math.random() - 0.5);
}
// console.log(sortRandomArray([5,101,4,39,9,77,54,1,10]));

//14 - There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
const sumPositions = (arr1, arr2):Array<number> => {
    if(arr1.length < arr2.length){
        arr1.fill(0,arr2.length,arr1.length);
        // console.log(arr1.fill(0,arr2.length,arr1.length));
    }else{
        arr2.fill(0,arr1.length, arr2.length);
        // console.log(arr2.fill(0,arr1.length,arr2.length));
    }
    let result = arr1.map((element, idx) => {
        return element + arr2[idx];
    })
    return result;
}
// console.log(sumPositions([1,2,3,4,5],[1,2,3,5]));

//15 - Write a JavaScript program to compute the union of two arrays. Sample Data :
const unionArray = (arr1:Array<any>, arr2:Array<any>):Array<any> => {
    arr1.forEach(element => arr2.push(element));
    return arr2;
}
// console.log(unionArray([1,2,3],[5,6,7,8]))

//16 - Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

// const removeFalsly = (arr:Array<any>):Array<any> => {
//     const itemsToRemove:Array<any> = [null,false,0,undefined,NaN,""];
//     arr.map(element => {
//         if(itemsToRemove.includes(element)) arr.pop();
//     })
//     return arr;
// }

// console.log(removeFalsly([NaN, 0, 15, false, -22, '',undefined, 47, null]));

// 17 - Write a JavaScript function to sort the following array of objects by title value.
const sortLibraryByTitle = (library) => {
    library.sort((a, b) => {
        if ( a.title < b.title )
            return -1;
        if ( a.title > b.title )
            return 1;
        return 0;
    })
    return library;
}
const library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
// console.log(sortLibraryByTitle(library));

//18 - Write a JavaScript function to find the longest common starting substring in a set of strings.

const findPrefix = (arr:Array<string>) => {
    /* prefijo */
    const regEx = /^(\w*)\w*(?: \1\w*)*$/;
    return arr.join(' ').match(regEx)[1];
}
let input = ["interspecies", "interstelar", "interstate"];
// console.log(findPrefix(input));

//19 - Write a JavaScript function to merge two arrays and removes all duplicates elements.

const mergeArrays = (arr1:Array<number>, arr2:Array<number>):Array<number> => {

    const merge = [...arr1,...arr2];
    const removeDuplicates = merge.filter((value,idx,self) => self.indexOf(value)===idx);
    return removeDuplicates;
}

// console.log(mergeArrays([1,2,3],[5,6,7,1,4,2,3]));

//20 - Write a JavaScript function to remove a specific element from an array.
const removeElement = (arr:Array<number>, removeNumber:number):Array<number> => {
    const result = arr.filter(element => element != removeNumber);
    return result;
}
// console.log(removeElement([1,2,3,4,5,6,5,6,5,6], 6));
//21 - Write a JavaScript function to get nth largest element from an unsorted array.

const getNthLargest = (arr:Array<number>, nth:number):number => {
    let result:number;
    const removeDuplicates = arr.filter((value,idx,self) => self.indexOf(value) === idx);
    arr.sort((a,b) => a - b);
    result = arr[nth];
    return result;
}
// console.log(getNthLargest([43, 56, 23, 89, 88, 90, 99, 652,89,99,56], 4));
// 1 - Write a JavaScript function to check whether an input is a string or not. Go to the editor

const is_string = (str:string):boolean => {
    
    if(typeof str === 'string') return true;
    return false;
}

// console.log(is_string('hola'));

// 2 - Write a JavaScript function to check whether a string is blank or not. Go to the editor
const is_blank = (str:string):boolean => {

    if(str.trim() === '') return true;
    return false;
}
// console.log(is_blank('   '));

// 3 - Write a JavaScript function to split a string and convert it into an array of words. Go to the editor

const stringToArray = (str:string):Array<string> => {
    let result:Array<string> = [];
    result = str.trim().split(' ');
    return result;

}
// console.log(stringToArray('hola com estas pedro'));

// 4 - Write a JavaScript function to remove specified number of characters from a string.

const truncateString = (str:string, numElems:number):string => {
    return str.substr(0, numElems);
}
// console.log(truncateString("hola manuel", 7));
// 5 - Write a JavaScript function to convert a string in abbreviated form.

const abbrevName = (str:string):string => {
    let result = str.trim().split(' ');
    result[1] = result[1].substr(0,1) + ".";
    return result.join(' ');
}

// console.log(abbrevName("Robin Sign"));

// 6 - Write a JavaScript function to hide email addresses to protect from unauthorized user.
const protectEmail = (email:string):string => {
    let result = email.split('@');
    result[0] = result[0].substr(0,result[1].length-3) + "...";
    return result.join('@');
}

// console.log(protectEmail('aaronllcam@gmail.com'));

// 7 - Write a JavaScript function to parameterize a string.
const parametrizeString = (str:string):string => {
    const regEx = /^$|\s+/gi;
    return str.replace(regEx,'-');
}
// console.log(parametrizeString("2Hola como estas"));

//8 - Write a JavaScript function to capitalize the first letter of a string.

const capitalizFirst = (str:string):string => {
    // console.log(str[0].toUpperCase() + str.slice(1));
    return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalizFirst("hola com estas"));

//9 - Write a JavaScript function to capitalize the first letter of each word in a string.

const capitalizeWords = (str:string):string => {
    let result = str.toLowerCase().trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return result;
}

// console.log(capitalizeWords('hola que tal'));
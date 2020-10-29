// 1 - Write a JavaScript function to check whether an input is a string or not. Go to the editor
var is_string = function (str) {
    if (typeof str === 'string')
        return true;
    return false;
};
// console.log(is_string('hola'));
// 2 - Write a JavaScript function to check whether a string is blank or not. Go to the editor
var is_blank = function (str) {
    if (str.trim() === '')
        return true;
    return false;
};
// console.log(is_blank('   '));
// 3 - Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
var stringToArray = function (str) {
    var result = [];
    result = str.trim().split(' ');
    return result;
};
// console.log(stringToArray('hola com estas pedro'));
// 4 - Write a JavaScript function to remove specified number of characters from a string.
var truncateString = function (str, numElems) {
    return str.substr(0, numElems);
};
// console.log(truncateString("hola manuel", 7));
// 5 - Write a JavaScript function to convert a string in abbreviated form.
var abbrevName = function (str) {
    var result = str.trim().split(' ');
    result[1] = result[1].substr(0, 1) + ".";
    return result.join(' ');
};
// console.log(abbrevName("Robin Sign"));
// 6 - Write a JavaScript function to hide email addresses to protect from unauthorized user.
var protectEmail = function (email) {
    var result = email.split('@');
    result[0] = result[0].substr(0, result[1].length - 3) + "...";
    return result.join('@');
};
// console.log(protectEmail('aaronllcam@gmail.com'));
// 7 - Write a JavaScript function to parameterize a string.
var parametrizeString = function (str) {
    var regEx = /^$|\s+/gi;
    return str.replace(regEx, '-');
};
// console.log(parametrizeString("2Hola como estas"));
//8 - Write a JavaScript function to capitalize the first letter of a string.
var capitalizFirst = function (str) {
    // console.log(str[0].toUpperCase() + str.slice(1));
    return str[0].toUpperCase() + str.slice(1);
};
console.log(capitalizFirst("hola com estas"));
//9 - Write a JavaScript function to capitalize the first letter of each word in a string.
var capitalizeWords = function (str) {
    var result = str.toLowerCase().trim().split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(' ');
    return result;
};
// console.log(capitalizeWords('hola que tal'));

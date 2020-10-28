//1 - fibonacci
var fibo = function (num) {
    var result = 1;
    var acum = [0, 1];
    for (var i = 1; i <= num; i++) {
        result = acum[i] + acum[i - 1];
        acum.push(result);
    }
    console.log.apply(console, acum);
    return acum;
};
fibo(7);
//2 - Define a function called add with a single argument input. The input to the function will be a string containing a comma-separated list of numbers. The function must return the sum of the numbers. e.g.
var sumaString = function (str) {
    var result = 0;
    var strArray = str.split(',');
    strArray.forEach(function (element) {
        result += parseInt(element);
    });
    console.log(strArray);
    console.log(result);
    return result;
};
sumaString("1,2,3,hola");
//3 - reverse number
var reverseNumber = function (num) {
    var numToStr = num.toString();
    return numToStr.split("").reverse().join("");
};
console.log(reverseNumber(123));
//4 - ispalindrome;
var isPalindrome = function (str) {
    var isPalindrome = false;
    var regEx = new RegExp(' ', 'gi');
    str = str.toLowerCase().replace(regEx, '');
    console.log(str.split("").reverse().join(""));
    console.log(str);
    if (str.split("").reverse().join("") === str) {
        return true;
    }
    return isPalindrome;
};
console.log(isPalindrome("Alli ves Sevilla"));
//5 - sort letters
var sortLetters = function (str) {
    var regEx = new RegExp(' ', 'ig');
    return str.replace(regEx, '').split("").sort().join("");
};
console.log(sortLetters("ho,la que pasas"));
//6  - text capitalized
var textCapitalized = function (str) {
    return str.replace(/\w\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
};
console.log(textCapitalized("hola como estas"));
//6 - longest word
var longestWord = function (str) {
    var maxWord = "";
    str.split(" ").forEach(function (word) {
        if (word.length > maxWord.length)
            maxWord = word;
    });
    return maxWord;
};
console.log(longestWord("web Development tool"));
//8 - How many vowels
var howManyVowels = function (str) {
    var count = 0;
    var regEx = new RegExp('a|e|i|o|u', 'gi');
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).match(regEx))
            count++;
    }
    return count;
};
console.log(howManyVowels("cuantas vocales hay"));
//9 - isPriume
var isPrime = function (num) {
    var isPrime = false;
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return isPrime = true;
    }
    return isPrime;
};
console.log(isPrime(1));
var whatType = function (val) {
    console.log(val + " is the type " + typeof (val) + " ");
};
whatType(5);
//10 - first and second greates
var moreGreatest = function (args) {
    args.sort(function (a, b) {
        return a - b;
    }).slice(0, 2);
    console.log(args.slice(0, 2));
    return args.slice(0, 2);
};
moreGreatest([1, 5, 67, 43, 3]);
//11 -is perfect?
var isPerfect = function (numb) {
    var isPerfect = false;
    var sum = 0;
    for (var i = 0; i < numb; i++) {
        if (numb % i == 0) {
            sum += i;
        }
    }
    if (sum === numb)
        return isPerfect = true;
    return isPerfect;
};
console.log(isPerfect(496));
//11 -coinfy convert
var coinfy = function (pay, coin) {
    var cont25 = 0;
    var cont10 = 0;
    var cont5 = 0;
    var cont2 = 0;
    var cont1 = 0;
    while (pay > 0) {
        if (pay >= 25) {
            pay = pay - 25;
            cont25++;
        }
        else if (pay >= 10) {
            pay = pay - 10;
            cont10++;
        }
        else if (pay >= 5) {
            pay = pay - 5;
            cont5++;
        }
        else if (pay >= 2) {
            pay = pay - 2;
            cont2++;
        }
        else {
            pay = pay - 1;
            cont1++;
        }
    }
    console.log("25: ", cont25);
    console.log("10: ", cont10);
    console.log("5: ", cont5);
    console.log("2: ", cont2);
    console.log("1: ", cont1);
};
coinfy(50, [10, 2]);

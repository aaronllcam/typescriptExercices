//1 - Calculator
var mainCalculator = function (type, a, b) {
    type.toLowerCase;
    var result;
    switch (type) {
        case "suma":
            result = a + b;
            break;
        case "resta":
            result = a - b;
            break;
        case "multiplicacion":
            result = a * b;
            break;
        case "division":
            result = a / b;
            break;
        default:
            result = null;
    }
    return result;
};
console.log(mainCalculator("fr", 10, 2));
//2 - calculatro plus, podemos pasar de  2 a 10 parametros.
var mainCalculatorPlus = function (type, numbers) {
    var result;
    type.toLowerCase;
    var msg = "Cantidad de numeros del array incorrectos, minimo dos y maximo 10 debe ser";
    if (numbers.length < 2 || numbers.length > 10)
        return msg;
    switch (type) {
        case "suma":
            result = 0;
            numbers.forEach(function (number) {
                result += number;
            });
            break;
        case "resta":
            result = 0;
            numbers.forEach(function (number) {
                result -= number;
            });
            break;
        case "multiplicacion":
            result = 1;
            numbers.forEach(function (number) {
                result *= number;
            });
            break;
        case "division":
            result = 1;
            numbers.forEach(function (number) {
                result /= number;
            });
            break;
        default:
            return null;
    }
    return result;
};
console.log(mainCalculatorPlus("hy", [1, 2, 5, 4, 1, 2, 5, 4, 1, 2, 5, 4]));
//3 - get full name
var getFullName = function (name, surname) {
    console.log("tu nombre es " + name + " " + surname);
};
getFullName("Aaron", "Lluesma");
//4 - isNumber
var mainIsNumber = function (num) {
    if (isNaN(num))
        return false;
    else
        return true;
};
console.log(mainIsNumber(5));
//5c -isString
var mainIsString = function (str) {
    if (typeof (str) === "string")
        return true;
    else
        return false;
};
console.log(mainIsString("2hola que tal"));
//6 - isBoolean
var mainIsBoolean = function (entrada) {
    if (typeof (entrada) === "boolean")
        return true;
    else
        return false;
};
console.log(mainIsBoolean(false));
//7 - recibe un string y los caracteres t,a,s,o reemplazarlos por 7,4,5,0
var mainEncodeWord = function (str) {
    str.toLowerCase;
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        switch (ch) {
            case 't':
                str = str.replace('t', '7');
                break;
            case 'a':
                str = str.replace('a', '4');
                break;
            case 's':
                str = str.replace('s', '5');
                break;
            case 'o':
                str = str.replace('o', '0');
                break;
        }
    }
    console.log(str);
};
mainEncodeWord("hola mtundo t");
//7 - a 
var mainEncodeWord2 = function (str) {
    var array = Array.from(str);
    str.toLowerCase;
    array.find(function (element) {
        console.log(typeof (element));
        if (element === 't')
            str = str.replace('t', '7');
        if (element === 'a')
            str = str.replace('a', '4');
        if (element === 's')
            str = str.replace('s', '5');
        if (element === 'o')
            str = str.replace('o', '0');
    });
    console.log(str);
};
mainEncodeWord2("taso");
// 8 - mejorar la funcion anterior para meter un numero aletaorio entre 0 y 1000 cada 7 caracteres.
var mainEncodeWordPlus = function (str) {
    var max = 1000;
    var min = 0;
    str.toLowerCase;
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (i % 7 == 0) {
            var randomNumber = Math.ceil(Math.random() * (max - min) + min);
        }
        else {
            switch (ch) {
                case 't':
                    str = str.replace('t', '7');
                    break;
                case 'a':
                    str = str.replace('a', '4');
                    break;
                case 's':
                    str = str.replace('s', '5');
                    break;
                case 'o':
                    str = str.replace('o', '0');
                    break;
            }
        }
    }
    console.log(str);
};

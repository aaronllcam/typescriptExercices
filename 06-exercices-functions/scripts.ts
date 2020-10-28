//1 - Calculator
const mainCalculator = (type:string, a:number, b:number):number => {
    type.toLowerCase;
    let result: number;
    switch (type){
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
}

console.log(mainCalculator("fr",10,2));

//2 - calculatro plus, podemos pasar de  2 a 10 parametros.
const mainCalculatorPlus = (type:string, numbers:Array<number>):any => {
    let result:number;
    type.toLowerCase;
    const msg:string = "Cantidad de numeros del array incorrectos, minimo dos y maximo 10 debe ser";
    
    if(numbers.length < 2 || numbers.length > 10) return msg;

    switch (type){
        case "suma":
            result = 0;
            numbers.forEach( number => {
                result += number;
            })
            break;
        case "resta":
            result = 0;
            numbers.forEach( number => {
                result -= number;
            })
            break;
        case "multiplicacion":
            result = 1;
            numbers.forEach( number => {
                result *= number;
            })
            break;
        case "division":
            result = 1;
            numbers.forEach( number => {
                result /= number;
            })
            break;
        default:
            return null;
        


    }
    return result;

}

console.log(mainCalculatorPlus("hy", [1,2,5,4,1,2,5,4,1,2,5,4]));

//3 - get full name
const getFullName = (name:string, surname:string):void => {
    console.log(`tu nombre es ${name} ${surname}`);
}

getFullName("Aaron","Lluesma");

//4 - isNumber

const mainIsNumber = (num:number):boolean => {
    if(isNaN(num)) return false;
    else return true;
}

console.log(mainIsNumber(5));
//5c -isString

const mainIsString = (str:string):boolean => {
    if(typeof(str) === "string") return true;
    else return false;
}

console.log(mainIsString("2hola que tal"));

//6 - isBoolean
const mainIsBoolean = (entrada:boolean):boolean => {
    if(typeof(entrada) === "boolean")return true;
    else return false;
}
console.log(mainIsBoolean(false));

//7 - recibe un string y los caracteres t,a,s,o reemplazarlos por 7,4,5,0

const mainEncodeWord = (str:string):void => {
    str.toLowerCase;
    for(let i=0; i<str.length; i++){
        let ch = str.charAt(i);
        switch(ch){
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
}
mainEncodeWord("hola mtundo t")
//7 - a 
const mainEncodeWord2 = (str:string):void => {
    let array:Array<string> = Array.from(str);
    str.toLowerCase;
    array.find(element => {
        console.log(typeof(element));
        if(element === 't') str = str.replace('t', '7');
        if(element === 'a') str = str.replace('a', '4');
        if(element === 's') str = str.replace('s', '5');
        if(element === 'o') str = str.replace('o', '0');

    })
    console.log(str);
}
mainEncodeWord2("taso")

// 8 - mejorar la funcion anterior para meter un numero aletaorio entre 0 y 1000 cada 7 caracteres.

const mainEncodeWordPlus = (str:string):void => {
    let max:number = 1000;
    let min:number = 0;
    str.toLowerCase;
    for(let i=0; i<str.length; i++){
        let ch = str.charAt(i);
        if(i%7 == 0){
            let randomNumber:number = Math.ceil(Math.random() * (max - min) + min);
        }else{
            switch(ch){
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
}





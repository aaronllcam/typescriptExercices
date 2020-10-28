//1 - Randomizes three numbers in range (0.. 100) and prints the largest one.
const randomLarge = () => {
    let array = [];
    let max = 100;
    let min = 0;

    for(let i=0; i<3; i++){
        array.push(Math.ceil(Math.random() * (max -min) + min));
    }
    result = Math.max(...array)
    console.log(result);
}

randomLarge();

// 2 & 3 exercice
//2 - Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.
//3 - Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40 nothing should be printed
const randomeven = () => {
    let max = 100;
    let min = 0;
    let randomNumber = Math.random() * (max - min) +min;
    let even = [];
    let odd = [];


    for(let i=0; i<randomNumber; i++){
        if(i%2 == 0) even.push(i)
        else odd.push(i)
    }
    console.log(...odd);
    console.log(...even);

}

randomeven();

//4 - Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)
const randomOddSmallers = (edegeNumber) => {
    let max = 100;
    let min = 0;
    let array = [];
    let randomNumber = Math.ceil(Math.random() * (max - min) +min);
    console.log(randomNumber);

    if(edegeNumber < randomNumber){
        for(let i = edegeNumber; i<=randomNumber; i++){
            array.unshift(i);
            
        }
        
    }else{
        for(let i = min; i<=randomNumber; i++){
            if(i%2 != 0) array.push(i)
        }
    }
    console.log(array);
}

randomOddSmallers(40);

//5 - Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.
const randomRandom = () => {
    let max = 100;
    let min = 0;
    let array = [];
    let randomNumber = Math.ceil(Math.random() * (max - min) +min);

    for(let i=0; i<randomNumber; i++){
        array.push(Math.ceil(Math.random() * (max - min) +min))
    }
    console.log(array);
    console.log("Result", Math.max(...array));
}
randomRandom();



//6 - Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits. For instance, if the randomized number was 1049, program should print 14

const randomSum = (matchNumber) => {
    console.log("hola");
    let max = 9999;
    let min = 1000;
    let array = [];
    let randomNumber = Math.ceil(Math.random() * (max - min) +min);
    let res = 0;
    console.log(randomNumber);
    if(randomNumber === matchNumber) return 5;
    else{
        console.log('else');
        console.log(randomNumber.toString().split(''));
        randomNumber.toString().split('').map( (element) => {
            res += parseInt(element);
        })
        return res;
    }
} 
console.log('Mira');
console.log(randomSum(1049));

//7 - Randomizes two numbers and prints the smallest number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one a proper note should be printed.

const ramdomSmallest = (x,y) => {
   gx=x;
    gy=y;
while (y != 0) {
w = x % y;
x = y;
y = w;
}
mcd=x;
mcm = gx*gy/mcd;
console.log('mcd',mcd);
console.log('mcm',mcm);

}

ramdomSmallest(66,50)
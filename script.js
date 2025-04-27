//Exercise #1: Arrow Functions Syntax

function greet(name) {
    return "Hello, " + name + "!";
}

/*Below is arrow function
const greet = (name) => "Hello, " + name + "!";
*/

function square(number) {
    return number * number;
}
/* Below is arrow function
const square = number => number * number;
*/

function isEven(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}
/* Below is arrow function
const isEven = (number) => number % 2 === 0; 
Simplest way to do it. Can also use ternary if you want.
*/

//Exercise #2 Implicit Returns

const square = (x) => { return x * x;};
/* Implicit below
 const square = x => x * x;
*/

const multiply = (a, b) => { return a * b;};
/* Implicit below
const multiply = a, b => a * b;
*/

const getMessage = () => { return "Welcome to JavaScript!";};
/* Implicit below
const getMessage = () => "Welcome to JavaScript!";
*/

/*
Parameters:
input: Array of numbers
output: array of numbers

Example: 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [4, 16, ...]

Psuedocode:
I am going to use the filter method to get back the even numbers. I will store this in a new variable 
called evenNumbers. I will then create a new variable called newSquarenumbers then map through the 
evenNumbers to square the numbers. Last I will return the newSquarenumbers variable.

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Your higher-order function
//Using array methods
const evenNumbersSquared1 = numbers => {
 const evenNumbers = numbers.filter((number) => {
  if(number % 2 === 0){
    return true;
  }
 }) 


 const squaredNumbers = evenNumbers.map((number) => {
  return number * number;
 })

 return squaredNumbers;
};

const evenNumbersSquared2 = nums => {
  let out = [];
  for(let i = 0; i < nums.length; i++){
    const number = nums[i]; // i = 0 on the first iteration
    
    if(number % 2 == 0){
      const square = number * number;
      out.push(square);
    }
  } 

  return out;
};

//With Array methods
// console.log(evenNumbersSquared1(numbers));
//Using Vanilla loops;
// console.log(evenNumbersSquared2(numbers));







const prices = [10.99, 5.49, 12.99, 8.75, 15.20];

// Your higher-order function here
const calculateDiscountedTotal = pricesArr => pricesArr.reduce((total, price) => {
  // console.log(total);
  // console.log(price);

  let discountedPrice = price * 0.8;
  // console.log(discountedPrice);

  return total + discountedPrice;
}, 0).toFixed(2);

// console.log(calculateDiscountedTotal(prices));

const calculateDiscountedTotal2 = pricesArr => {
  let i = 0;
  let total = 0;

  while(i < pricesArr.length){
    const currentPrice = pricesArr[i];
    console.log(currentPrice);
    
    const reducedPrice = currentPrice * 0.8;

    total = reducedPrice + total;

    i++;

  }  

  return total;
}

// console.log(calculateDiscountedTotal2(prices));

const words = ["cherry", "apple", "banana", "date", "elderberry"];

// Your higher-order function here
const findWordWithA = wordsArr => {
  if(!wordsArr.length >= 1){
    return "You need an array filled with words"
  }
  const wordA = wordsArr.find(word => word.includes("a"))

  return wordA;
};

// console.log(findWordWithA(words));
// console.log(findWordWithA([]))

// console.time("Recursion");
// function countdown(n) {
//     if (n <= 0) {
//       console.log("Done!");
//       return;
//     }
   
//     console.log(n);
//     countdown(n - 1);  
// }

// countdown(5);
// console.timeEnd("Recursion");

// console.time("for");
// for(let i = 5; i >= 0; i--){
//     console.log(i);
// }
// console.timeEnd("for")

function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

// factorial(3) => 6
//   factorial(2) => 2
//     factorial(1) => 1
//       factorial(0) => 1

// console.log(factorial(3))

const sumOfArray = (arrayOfNumbers) => {
  //Your code here
  if(arrayOfNumbers.length == 0){
    return 0;
  }

  const num = arrayOfNumbers.pop();
  console.log(arrayOfNumbers);
  console.log(num);

  return num + sumOfArray(arrayOfNumbers);
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6]))

// Input: [1, 2, 3, 4, 5, 6]
// Output: 21
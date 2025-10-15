// maps in arrays give us a new array without changing the existing the array for this we can use maps functions in arrays
// helps us to perform some function on array's elements and then we get a new array

//map ek built-in method hai jo Array object ka part hai (Array.prototype.map). Yeh ek higher-order function hai jo har element pe ek callback function apply karta hai aur ek naya array return karta hai, original array ko modify kiye bina. Yeh functional programming ka ek powerful tool hai aur immutable data handling ke liye popular hai.

//1. Basic Usage: Doubling Numbers

let numbers = [1, 2, 3];
let doubled = numbers.map((num) => num * 2);
console.log(doubled);

// 2. Using Index

let letters = ["a", "b", "c"];
let indexed = letters.map((letters, index) => `${letters}:${index}`);
console.log(indexed);

//3. Transforming Objects in Array

let user = [
  { name: "rahul", age: 24 },
  { name: "shubham", age: 23 },
];

let extractednames = user.map((user) => user.name);
console.log(extractednames);

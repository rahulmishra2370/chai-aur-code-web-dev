/*

filter ek built-in method hai jo Array object ka part hai (Array.prototype.filter). Yeh bhi ek higher-order function hai jo array ke har element pe ek callback function apply karta hai aur ek naya array return karta hai, lekin sirf un elements ko jo callback se true return karte hain. Original array modify nahi hota, aur yeh immutable data handling ke liye perfect hai.Key Feature: Sirf condition ko satisfy karne wale elements ko naya array mein include karta hai.
Return Value: Ek naya array jo original array se chhota ya barabar ho sakta hai.


 */

//1. Basic Usage: Filtering Even Numbers

let numbers = [1, 2, 3, 4, 5, 6];
let evennumbers = numbers.filter((num) => num % 2 === 0);
console.log(evennumbers);

// 2. Using Index

let numbers1 = [10, 20, 30, 40];

let filternumbers = numbers1.filter((num, index) => index % 2 == 0);
console.log(filternumbers);

//3.Filtering Objects

let students = [
  { name: "rahul", marks: 95 },
  { name: "shubham", marks: 98 },
];

let topstudents = students.filter((student) => student.marks > 95);
console.log(topstudents);

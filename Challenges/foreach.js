const { obj } = require("./de-structing-of-objects");

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((numbers) => console.log(numbers + 1));

// destructing in the arrays

let details = ["car", "black", 5];

let [vehicle, color, quantity] = details;

// array destructing is technique in which we create a array of variables and we assign that to our array on wich we have to work
// thus in this way we don't have to careate the mutlpile variables in evey line when we want to assign the values of arrays to some variables

// console.log(vehicle, color, quantity);

let person = ["rahul", 24, "chandigarh", ["male", "running"]];

let [name, age = 22, city, [gender, sport]] = person;
console.log(name, age, sport);

//thats how the arrays destucting works in nested arrays
//if user has not assigned a value for particular thing then we can by default set a value for it in our array of variables

// we can also do the destructing of the arrays using the functions as well

function user() {
  return ["rahul22", "mishra", "running"];
}

let [naam, surname, sports] = user();

console.log(naam);
export let { fname, sname, age } = obj;

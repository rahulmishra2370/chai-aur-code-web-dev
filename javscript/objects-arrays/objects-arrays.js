console.log("hey0");
// Arrays
const color = ["red", "pink", "green", "purple"];
const index = color.indexOf("purple");
console.log(index);
if (index > -1) {
  let arr = color.splice(index, 1);
}
// splice
//map
// filter
// reduce
// sort
// use a for loop in the array of your choice and then find out which element of your array has the max number of characters
// create an arrays and then push its value in a new array in a revered order

//...........................OBJECTS........................

const obj = {
  key_of_obj: "value of key",
  x: 21,
  hobbies: ["gym", "cycling", "running", "military novels"],
  ismarried: false,
  hasgf: false,
  firstname: "Rahul",
  lastname: "Mishra",
  getfullname: function () {
    return obj.firstname + " " + obj.lastname;
  },
  address: {
    hno: 237,
    society: "sv",
    state: "pb",
    pin: 140603,
  },
};
console.log(obj.getfullname(), obj.address, obj.hobbies);

// if we want to create a real world obj in the coding world we can do it by creating that thing into the object form
// for example if we want to create a remote of tv in the coding world we can do it as follow
const remote = {
  // now we have to create its properties as key value pairs that creates a coding world remote
  color: "black",
  buttons: 9,
  dimensions: {
    height: 20,
    widhth: 10,
  },
  turnoff: function () {
    if (this.turnoff == true) return shutdown;
  },
  volumeup: function () {
    // funtionality here
  },
}; // this how a coding world remote is ready

let firstname = "rahul";
let newname = firstname;
console.log(firstname);
console.log(newname);
newname = "mishra";
console.log("again printing");
console.log(firstname);
console.log(newname);

const p1 = {
  name: "rahul",
};
const p2 = p1;
console.log("before any modification/copying");
console.log(p1);
console.log(p2);
p2.name = "mishra hai ab ";
console.log("now printting both after edititng in the p2");
console.log(p1);
console.log(p2);

// in the case of string when we cpoy sometrhing in a new variable and if its value is change (new one ) there is no change in the origianl string

// when i did samething with the object while copying and editing the new obj its changes also reflect in the org obj whyyyyy???????

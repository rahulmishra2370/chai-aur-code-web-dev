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

// answer .md file mei hai iski

let obj1 = {
  car1: "gurkha",
  car2: "thar",
};

let obj2 = {
  ...obj1,
};
console.log(obj2);
// now modifiying the value of obj2 but it will not affect the values of obj1
obj2.car1 = "maruti";
console.log(obj2); // change reflect here only
console.log(obj1); // no change in this

// this is called SHALLOW copy if there is a nested object here it will still change in both original and copied object see here

let objectforshallow1 = {
  copy: "classmate",
  notebook: "red",
  notebookdimension: {
    height: 100,
    width: 100,
  },
};

let objectforshallow2 = {
  ...objectforshallow1,
};

console.log(objectforshallow2);
console.log(objectforshallow1);
// here i will change the value of nested object notebook dimension it will relfect in both

objectforshallow2.notebookdimension.height = 120000;
objectforshallow2.notebookdimension.width = 1300000;

// now printing this again
console.log(objectforshallow1); // change reflect here also
console.log(objectforshallow2); //change reflect here aslo
//.............to overcome this limitations of shallow copy we do DEEEEEEEEEEEEEEPPPPPPPPPPPPPP COPYYYYYY

/* for deep copying we have to do is that 
first convert our object into string and 
then  copy that into our new object
 as our new object is having a object data that is converted to string
 and then to object again 
 this will create the copy of nested obojectslso*/

// Original object with nested objects
const original = {
  name: "Rahul",
  info: {
    age: 25,
    address: {
      city: "Delhi",
      pin: 110001,
    },
  },
  hobbies: ["coding", "gaming"],
};

// Deep copy using JSON.stringify and JSON.parse
const deepCopy = JSON.parse(JSON.stringify(original));

// Let's modify the deep copy
deepCopy.name = "Mishra";
deepCopy.info.age = 30;
deepCopy.info.address.city = "Mumbai";
deepCopy.hobbies[0] = "reading";

// Print both objects to see the difference
console.log("Original Object:", original);
console.log("Deep Copy:", deepCopy);

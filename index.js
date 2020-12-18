// example 1:

let a = "Hello"; // global variable

function sum() {
  let b = "World"; // local variable
  console.log(a + " " + b);
}

sum();

// example Clousure:

var a = "Hi";

function sayHello() {
  var b = "you!";
  function innerFunction() {
    // can access to value b and a
    var c = 1 + a + b;
    return c;
  }
  return innerFunction();
}

var concat = sayHello();
console.log("the text is: " + concat);

// example Clousure:

function Animal(name) {
  this.name = name;
}

var myCat = new Animal("Jimmy");

console.log(myCat.name); // Jimmy

// is !== if we change this.name to var name;

function Animal(name) {
  var name = name;
}

var myCat = new Animal("Jimmy");

console.log(myCat.name); // undefined or Animal {}

// Clousure is:

function Animal(name) {
  var _name = name;
  // we still have some way to access the variable name. we can create a new function 
  this.getName = function() {
    return _name;
  }
}

var myCat = new Animal("Jimmy");

console.log(myCat.getName())

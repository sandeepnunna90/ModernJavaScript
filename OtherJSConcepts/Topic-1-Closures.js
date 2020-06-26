// Closures are functions with preserved data
// Variables defined outside the function are automatcially available inside the function
// It is called lexical scoping - This is done via closure


// Sample  example
// Any function where we are using the variables outside the scope of function block is closure
var passed = 3;

var addTooo = function () {
  var inner = 2;
  return passed + inner;
};

console.log(addTooo());

console.dir(addTooo);

/////////////////////////////////////

var addTo = function(passed) {
  var add = function(inner){
    console.log('Passed', passed);
    console.log('inner', inner);
    return passed + inner;
  }

  return add;
};

// console.dir(addTo(3));

var addThree = new addTo(3);
// var addFour = new addTo(4);

console.log(addThree(1));
// console.log(addFour(1));

// we can create unlimited number of functions like addThree using this concept
// It keeps the variable it needed to execute.
// It preserves the variable inside the function as a property (closure). In the example it presrves 3
// closure - functions with preserved data.

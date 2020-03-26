console.log(this); // give the id of playgroudn

// Provides this in console in jscomplte for this value ---> {id: "PLAYGROUND"}

const testeObj = {
  func1: function () {
    console.log('In func1', this);
  },

  func2: () => {
    console.log('In func2', this);
  }
};

testerObj.func1();
// console output:  In func1 {func1: ƒ, func2: ƒ}
// Represents the tester object itself

testerObj.func2();
// console output: In func2 {id: "PLAYGROUND"}
// Here the this keyword will give the value of "this" that was available
// when the function was defined (which is the same value of console.log(this))
// at the point of defining func2


// Sample Arrow function

const square = (a) => {
  return a * a
};

//when there is only return statement can remove return & parenthesis
const square2 = (a) => a * a;

// can remove argument brackets as well if there is only one argument
const square3 = a => a * a;


//popular with arrays functions like map etc.
[1, 2, 3, 4].map(a => a * a);

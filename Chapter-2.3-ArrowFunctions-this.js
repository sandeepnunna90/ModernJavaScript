// "this" here is "exports" - in node js

this.id = 'exports';

console.log(this);


const testerObj = {
  func1: function () {
    console.log('func1', this);
  },

  func2: () => {
    console.log('func2', this);
  },
};

testerObj.func1(); // func1 { func1: [Function: func1], func2: [Function: func2] }
testerObj.func2(); // func2 { id: 'exports' } - benefits when working with listners in Node JS

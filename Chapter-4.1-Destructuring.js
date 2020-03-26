// Destructurig works for both arrays and objects


// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

// Descrtucrturing syntax - Instead of using the above
const {PI, E, SQRT2}  = Math;

// Useful when you have to destructure a few properties out of a bigger object

// Somewhere in a React App
const {Component, Fragment, useState} = require('react');
useState();


// Destructuring can also be used inside function arguments.
// If the argument passed to a function is an object,
// instead of using the name of object everytime to access its property
// we can destrucutre just that property and make them local to that function by
// passing it via parenthesis

// see below example

// circle object with 2 properties label & radius
const circle = {
  label: 'circleX',
  radius: 2,
};

// Defining an arrow function called circleArea
// Here the arrow function argument is passed as {radius} in parenthesies where
// radius is the object property in circle
const circleArea = ({radius}) => (PI * radius * radius).toFixed(2)

// we can pass circle object when making the function call,
// but in the function defintion where are sending {radius} which directly
// passes the value of 2
// ----> improves readibilty & used for props argument in react components
console.log(
  circleArea(circle)
);

// Descrutcutre arguments can also be defined with defaults
// precision is equal to 2 when precision is not defined
const circleArea2 = ({radius}, {precision = 2}) =>
  (PI * radius * radius).toFixed(precision);

console.log(
  circleArea2(circle)
); // gives value 12.57




// Make it optional by using an equal sign and make it empty
const circleArea3 = ({radius}, {precision} = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(
  circleArea3(circle) // gives 13 as precision is optional and not defined
  // rounds to next number as 12.57 will 13
);

console.log(
  circleArea3(circle, { precision: 4 }) // gives 12.5664
);

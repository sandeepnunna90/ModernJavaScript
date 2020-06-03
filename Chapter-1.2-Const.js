// Scalar Values

// const is used when the reference assigned to a value means to be a constant one.
// not the value itself is constant. It can be changed

// Value is constant in the case of scalar values as shown below
// const lets scalar values be immutable. you cannot change the value of answer / greeting
const answer = 40;
const greeting = 'Sandeep';


// Arrays and Objects

const numbers = [1, 2, 3];
const person = {
name: 'Sandeep',
age: 29
};

//example - the below operations will work
numbers.push(5);
numbers.push(6);
numbers.pop();

// this will not work as the reference of the array is changing. its becoming a new array.
numbers = [2,3,4];

// const lets the variable points to the same arrays & objects (reference) but the values can be changed - find example online

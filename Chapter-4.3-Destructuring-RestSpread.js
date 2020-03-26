// Using ... (3 dots) asigns the rest of the elements / objects to that const

const [first, ...restOfItems] = [10, 20, 30, 40]
console.log(first); //Console Output: 10
console.log(restOfItems); //Console Output: [20, 30, 40]


const data = {
	temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const {temp1, temp2, ...person} = data;

console.log(temp1); //Console Output: 001
console.log(temp2); //Console Output: 002
console.log(person); // gives a new object Console Output: {firstName: "John", lastName: "Doe"}


// can create arrays / objects like this as well
const newArray = [...restOfItems];

const newObject = {
  ...person
}

console.log(newArray);  //Console Output: [20, 30, 40]
console.log(newObject);  //Console Output: {firstName: "John", lastName: "Doe"}

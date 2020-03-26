// to extract array values to local variables
const [first, second, third, forth, fifth] = [10, 20, 30, 40, 50];

// double comma skips the next value in array and continues
const [apple, banana,, peach] = [10, 20, 30, 40, 50];

console.log(apple); // 10
console.log(banana); // 20
console.log(peach); // 40


// use array desctructuring to fetch the value of useState
const [value, setValue] = useState(initialValue)


const [first, ...restofthem] = [10, 20, 30, 40]
console.log(first); // gives 10
console.log(restofthem); // gives [20, 30, 40]

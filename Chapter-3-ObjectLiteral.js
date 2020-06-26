/*
      const obj = {
        key: value
      };
*/

const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;

// literal intiation is common
const obj = {
	p1: 10,
  p2: 20,
  f1() {},
  // short hand notition of f1: function() {},
  f2: () => {},
  [mystery]: 42, // mordern js supports dynamic property using the syntax here
  // js evaluates the value of mystery
  InverseOfPI, // can define property name when you want the same value as const InverseOfPI
  // we can do the above instead of InverseOfPI: InverseOfPI
};

console.log(obj.mystery); // gives undefined here as mystery is evaluated first
console.log(obj.answer); // gives 42

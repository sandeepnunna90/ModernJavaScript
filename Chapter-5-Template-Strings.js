// can define strings in JS using both single quotes / double quotes
const greeting = "Hello World";

const answer = 'Forty Two';

// Mordern JS allows to defince strings with backtick character eg: (`Sandeep`)
// They can be used as a template with dynamic values --> support interpolation
// Can inject any dynamic expression in javascript in the dollar curly braces ${}

const html = `<div>${Math.random()}</div>`;
// similar to string interpolation in ruby #{}
// we use dollar sign ($) in JavaScript instead of hash sign (#)

//template string allow multi line string which were not allowed in regular coded strings

const html2 = `
    <div>
      ${Math.PI}
    </div>
`;

console.log(html2);
// gives the below in console
//    <div>
//      3.141592653589793
//    </div>

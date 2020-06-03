{
  // Block Scope
  {
    // Nested Block Scope
    // let, const inside block scope will protect the variables inside
    // meaning they are not accessed from outside the block
  }
}

if(true) {
  // Block Scope
}


// Block Scope Concept

for (var i=0, i <=10, i++) {
//Block Scope
}

i
//Block Scope
//Where if we call i after the for loop ends. it would give a values of 11

// To avoid this in mordern JS we declare variables inside with let instead of var
// So the for loop becomes
//variables inside block scope can be access outside the block(loop)


for (let j=0, j<= 10, j++) {

}

j // Here it gives an undefined error as j is limited to for loop



// Function Scope Concept

function Sum(a, b) {
  // function scope
  var result = a + b;
}

// function Scope
// If we try to call result outside of function
// result - Will give an error in console
// variables defined inside function scope cannot be accessed outside of the scope

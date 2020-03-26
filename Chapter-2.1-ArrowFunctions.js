// Regular functions
const X = function {
  // "this" here is the caller of X
  // this in playgroud jscomplete  is the value of window object
}



// Arrow Function
const Y = () => {
  // "this" here is not the caller of Y

  //Its the same "this" found in Y's Scope
}

// Y doesn't care about who called it. But closes over the value of the "this" keyword for
// its scope at the time it was defined
// Makes it great for delayed execution cases for events & listners


// Regular functions give access to their "calling" environment while arrow functions give
// access to their "defining" environment

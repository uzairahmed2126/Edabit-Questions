// Using the "&&" Operator
// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

// Consider a && b:

// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.

// Make a function using the && operator.
function and(a, b) {
  //   if (a === false) {
  //     return false;
  //   } else if (b === false) {
  //     return false;
  //   } else if (a === true) {
  //     return true;
  //   } else if (b === true) {
  //     return true;
  //   }
  //   return false;
  //   return a ? b : a;
    return a && b;
}
// Examples
console.log(and(true, false)); //➞ false
console.log(and(true, true)); //➞ true
console.log(and(false, true)); //➞ false
console.log(and(false, false)); //➞ false

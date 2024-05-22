// Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
function allTruthy(...args) {
  //   for (let i = 0; i < args.length; i++) {
  //     if (!args[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  //   return args.every(Boolean);
  //   return args.reduce((acc, val) => Boolean(val));
  return args.every((arg) => arg);
}
console.log(allTruthy(true, true, true)); //➞ true
console.log(allTruthy(true, false, true)); //➞ false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); //➞ false
console.log(allTruthy("1", "2", "3")); //true
// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.

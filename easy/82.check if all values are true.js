// Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
function allTruthy(...value) {
  return value.every((item) => item === true);
}
console.log(allTruthy(true, true, true)); //➞ true
console.log(allTruthy(true, false, true)); //➞ false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); //➞ false
console.log(allTruthy("1", "2", "3"));
// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.

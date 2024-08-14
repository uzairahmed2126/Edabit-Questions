// Is it an Object?
// Create a function to check whether the given parameter is an Object or not.

// Examples
function isObject(value) {
  return (
    (value !== null && typeof value === "object") || typeof value === "function"
  );
}
console.log(
  isObject(function add(x, y) {
    return x + y;
  })
); //➞ true
console.log(isObject(new RegExp("^[a-zA-Z0-9]+$", "g"))); //➞ true
console.log(isObject(null)); //➞ false
console.log(isObject("")); //➞ false
// Notes
// Inputs may be null, primitive wrapper types, dates.

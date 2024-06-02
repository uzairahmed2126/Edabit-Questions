// Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
function length(str) {
  let result = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    result++;
  }
  return result;
}
console.log(length("Hello World")); //➞ 11
console.log(length("Edabit")); //➞ 6
console.log(length("wash your hands!")); //➞ 16
// Notes
// N/A

// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

// Examples
function length(str) {
  if (str === "") {
    return 0;
  }
  return 1 + length(str.slice(1));
  // return str.length
}
console.log(length("apple")); //➞ 5
console.log(length("make")); //➞ 4
console.log(length("a")); //➞ 1
console.log(length("")); //➞ 0
// Notes
// Check the Resources tab for info on recursion.

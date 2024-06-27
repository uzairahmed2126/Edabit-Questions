// Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

// Examples
function isEmpty(str) {
  // return str.length===0
  return str === "";
}
console.log(isEmpty("")); //➞ true

console.log(isEmpty(" ")); //➞ false

console.log(isEmpty("a")); //➞ false
// Notes
// A string containing only whitespaces " " does not count as empty.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

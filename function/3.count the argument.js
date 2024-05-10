// Count the Arguments
// Create a function that returns the number of arguments it was called with.

// Examples
function numArgs(...value) {
  return value.length;
}
console.log(numArgs()); //➞ 0
console.log(numArgs("foo")); //➞ 1
console.log(numArgs("foo", "bar")); //➞ 2
console.log(numArgs(true, false)); //➞ 2
console.log(numArgs({})); //➞ 1
// Notes
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

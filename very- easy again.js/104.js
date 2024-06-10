// Where is Bob!?!
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

// Examples
function findBob(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim().toLowerCase() === "bob") {
      return i;
    }
  }
  return -1;
}
console.log(findBob(["Jimmy", "Layla", "Bob"])); //➞ 2
console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"])); //➞ 0
console.log(findBob(["Jimmy", "Layla", "James"])); //➞ -1
// Notes
// Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").

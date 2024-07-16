// Is the Object Empty?
// Write a function that returns true if an object is empty, and false otherwise.

// Examples
function isEmpty(obj) {
  //   return Object.keys(obj).length === 0;
  //   return Object.entries(obj).length === 0;
  for (const key in obj) {
    if (key !== undefined) {
      return false;
    }
  }
  return true;
}
console.log(isEmpty({})); //➞ true

console.log(isEmpty({ a: 1 })); //➞ false
// Notes
// N/A

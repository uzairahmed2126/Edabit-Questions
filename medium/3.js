// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
function toArray(object) {
  let result = [];
  for (const key in object) {
    result.push([key, object[key]]);
  }
  return result;
  //   return Object.entries(object);
}
console.log(toArray({ a: 1, b: 2 })); //➞ [["a", 1], ["b", 2]]

console.log(toArray({ shrimp: 15, tots: 12 })); //➞ [["shrimp", 15], ["tots", 12]]

console.log(toArray({})); //➞ []
// Notes
// Return an empty array if the object is empty.

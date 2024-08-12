// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
function toArray(obj) {
  const keys = Object.keys(obj);
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result.push([key, obj[key]]);
  }
  return result;
  //   for (const element in obj) {
  //     arr.push([element, obj[element]]);
  //   }
  //   return Object.entries(obj);
}
console.log(toArray({ a: 1, b: 2 })); //➞ [["a", 1], ["b", 2]]
console.log(toArray({ shrimp: 15, tots: 12 })); //➞ [["shrimp", 15], ["tots", 12]]
console.log(toArray({})); //➞ []
// Notes
// Return an empty array if the object is empty.

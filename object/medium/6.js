// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// Examples
function objectToArray(obj) {
  //   return Object.entries(obj);
  const keys = Object.keys(obj);
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    result.push([key, obj[key]]);
  }
  return result;
}
console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
); //➞ [["D", 1], ["B", 2], ["C", 3]]

console.log(
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10,
  })
); //➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
// Notes
// N/A

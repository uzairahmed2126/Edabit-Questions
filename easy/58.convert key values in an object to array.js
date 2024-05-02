// Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// Examples
function objectToArray(obj) {
  let arr = [];
  for (const key in obj) {
    arr.push([key, obj[key]]);
  }
  //   return Object.entries(obj);
  return arr;
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

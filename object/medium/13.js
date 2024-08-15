// Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

// Examples
// function mapping(arr) {
//   let result = {};
//   for (let i = 0; i < arr.length; i++) {
//     result[arr[i]] = arr[i].toUpperCase();
//   }
//   return result;
// }
function mapping(arr) {
  let result;
  result = Object.assign(
    {},
    ...arr.map((char) => ({ [char]: char.toUpperCase() }))
  );
  return result;
}
console.log(mapping(["p", "s"])); //➞ { "p": "P", "s": "S" }
console.log(mapping(["a", "b", "c"])); //➞ { "a": "A", "b": "B", "c": "C" }
console.log(mapping(["a", "v", "y", "z"])); //➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
// Notes
// All of the letters in the input list will always be lowercase.

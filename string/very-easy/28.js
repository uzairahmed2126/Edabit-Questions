// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:
function toNumberArray(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(+arr[i]);
//   }
//   return result;
return arr.map((item)=>Number(item))
}
console.log(["1", "3", "3.6"]); //➞ [1, 3, 3.6]
console.log(toNumberArray(["9.4", "4.2"])); //➞ [9.4, 4.2]
console.log(toNumberArray(["91", "44"])); //➞ [91, 44]
console.log(toNumberArray(["9.5", "8.8"])); //➞ [9.5, 8.8]
// Notes
// Some inputs are floats.

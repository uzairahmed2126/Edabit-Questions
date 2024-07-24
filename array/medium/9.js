// Fix the Error: Flattening an Array
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

function flatten(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2 = arr2.concat(arr[i]);
  }
  return arr2;
  //   return arr2.concat(...arr)
  //   return arr.flat();
}
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// Examples
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
); //➞ []
// Expected: [1, 2, 3, 4]

console.log(
  flatten([
    ["a", "b"],
    ["c", "d"],
  ])
); //➞ []
// Expected: ["a", "b", "c", "d"]

console.log(
  flatten([
    [true, false],
    [false, false],
  ])
); //➞ []
// Expected: [true, false, false, false]
// Notes
// N/A

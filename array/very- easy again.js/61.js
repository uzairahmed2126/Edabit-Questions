// Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// Examples
function invertArray(arr) {
  let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(-arr[i]);
  //   }
  //   return result;
  //   return arr.map((element) => -element);
  arr.forEach((element) => result.push(-element));
  return result;
}
console.log(invertArray([1, 2, 3, 4, 5])); //➞ [-1, -2, -3, -4, -5]
console.log(invertArray([1, -2, 3, -4, 5])); //➞ [-1, 2, -3, 4, -5]
console.log(invertArray([])); //➞ []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

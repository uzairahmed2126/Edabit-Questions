// Return the First and Last Elements in an Array
// Create a function that takes an array of values and returns the first and last values in a new array.

// Examples
function firstLast(arr) {
  //   let firstAndLast = [arr[0], arr[arr.length - 1]];
  //   return firstAndLast;
  //   let firstElement = arr.shift();
  //   let lastElement = arr.pop();
  //   return [firstElement, lastElement];
  let result = [];
  for (let i = 0; i < arr.length; i += arr.length-1) {
    result.push(arr[i]);
  }

  return result;
}
console.log(firstLast([5, 10, 15, 20, 25])); //➞ [5, 25]
console.log(firstLast(["edabit", 13, null, false, true])); //➞ ["edabit", true]
console.log(firstLast([undefined, 4, "6", "hello", null])); //➞ [undefined, null]
// Notes
// Test input will always contain a minimum of two elements within the array.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

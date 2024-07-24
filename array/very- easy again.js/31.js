// Reverse an Array
// Write a function to reverse an array.

// Examples
function reverse(arr) {
  //   return arr.reverse();
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // arr[i] = arr[arr.length - 1];
    result.push(arr[i]);
    // result.push(arr.length - i);
  }
  return result;
}
console.log(reverse([1, 2, 3, 4])); //➞ [4, 3, 2, 1]
console.log(reverse([9, 9, 2, 3, 4])); //➞ [4, 3, 2, 9, 9]
console.log(reverse([])); //➞ []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

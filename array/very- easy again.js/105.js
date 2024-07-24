// Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.

// Examples
function findLargestNum(arr) {
  // return Math.max(...arr)
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr.length; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //       }
  //     }
  //   }
  //   return arr[arr.length - 1];
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}
console.log(findLargestNum([4, 5, 1, 3])); //➞ 5
console.log(findLargestNum([300, 200, 600, 150])); //➞ 600
console.log(findLargestNum([1000, 1001, 857, 1])); //➞ 1001
// Notes
// Expect either a positive number or zero (there are no negative numbers).
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

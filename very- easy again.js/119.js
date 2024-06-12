// Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number in the set.

// Examples
function findSmallestNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr[0];
  //   return Math.min(...arr);
}
console.log(findSmallestNum([34, 15, 88, 2])); //➞ 2
console.log(findSmallestNum([34, -345, -1, 100])); //➞ -345
console.log(findSmallestNum([-76, 1.345, 1, 0])); //➞ -76
console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])); //➞ -0.9999
console.log(findSmallestNum([7, 7, 7])); //➞ 7
// Notes
// Test cases contain decimals.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

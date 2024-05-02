// Find the Second Largest Number
// Create a function that takes an array of numbers and returns the second largest number.

// Examples
function secondLargest(arr) {
  //   arr.sort((a, b) => a - b);
  //   return arr[arr.length - 2];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr[arr.length-2];
}
console.log(secondLargest([10, 40, 30, 20, 50])); //➞ 40

console.log(secondLargest([25, 143, 89, 13, 105])); //➞ 105

console.log(secondLargest([54, 23, 11, 17, 10])); //➞ 23
// Notes
// There will be at least two numbers in the array.

// Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

// Examples
function diffMaxMin(arr) {
  //   let biggestNumber = Math.max(...arr);
  //   let smallestNumber = Math.min(...arr);
  //   return biggestNumber - smallestNumber;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr[arr.length - 1] - arr[0];
}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); //➞ 82
// Smallest number is -50, biggest is 32.

console.log(diffMaxMin([44, 32, 86, 19])); //➞ 67
// Smallest number is 19, biggest is 86.
// Notes
// N/A

// Measure the Depth of Emptiness
// In this challenge you will receive an input of the form:

// [[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing... an array containing nothing.

// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

// Examples
function measureDepth(arr) {
  let current = arr;
  let count = 0;
  while (Array.isArray(current) && current.length >= 0) {
    count++;
    current = current[0];
  }
  return count;
}
console.log(measureDepth([])); //➞ 1
console.log(measureDepth([[]])); //➞ 2
console.log(measureDepth([[[]]])); //➞ 3
console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])); //➞ 11
// Notes
// For a bonus challenge, try to find a solution without recursion.

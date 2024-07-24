// Even or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
function evenOrOdd(arr) {
  for (const iterator of arr) {
    if (iterator % 2 === 0) {
      return "even";
    }
  }
  return arr.length === 0 ? "even" : "odd";
}
console.log(evenOrOdd([0])); //➞ "even"
console.log(evenOrOdd([1])); //➞ "odd"
console.log(evenOrOdd([])); //➞ "even"
console.log(evenOrOdd([0, 1, 5])); //➞ "even"
// Notes
// N/A

// Currying Functions
// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Examples
function multiply(arr) {
  function number(num) {
    let mapped = [];
    // return arr.map((item) => item * num);
    for (let i = 0; i < arr.length; i++) {
      mapped.push(arr[i] * num);
    }
    return mapped;
  }
  return number;
}
console.log(multiply([1, 2, 3])(2)); //➞ [2, 4, 6]

console.log(multiply([4, 6, 5])(10)); //➞ [40, 60, 50]

console.log(multiply([1, 2, 3])(0)); //➞ [0, 0, 0]
// Notes
// Your function must be called multiply.

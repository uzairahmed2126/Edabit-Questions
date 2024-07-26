// Function Function
// Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.

// Examples

function factory(diviser) {
  return function (arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i] / diviser);
    }
    return res;
  };
}

const first = factory(15);
// returns a function first.
const arr1 = [30, 45, 60];
// 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4
console.log(first(arr1)); //➞ [2, 3, 4]
const second = factory(2);
// returns a function second.
const arr2 = [2, 4, 6];
// 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3
console.log(second(arr2)); //➞ [1, 2, 3]
// Notes
// Rounding not required.

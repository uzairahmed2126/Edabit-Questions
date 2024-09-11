// Probabilities (Part 1)
// Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.

// Examples
// function robability(arr, n) {
//   let favourableOutComes = arr.filter((number) => number >= n).length;
//   let probability = 0;
//   probability = 100 * (favourableOutComes / arr.length);
//   return probability.toFixed(1);
// }
function robability(arr, n) {
  let probability = [];
  let percentage = 0;
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];
    if (number >= n) {
      probability.push(arr[i]);
    }
  }
  percentage = 100 * (probability.length / arr.length);
  return percentage.toFixed(1);
}
console.log(robability([5, 1, 8, 9], 6)); //➞ 50.0
console.log(robability([7, 4, 17, 14, 12, 3], 16)); //➞ 16.7
console.log(robability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6)); //➞ 70.0
// Notes
// Precent probability of event = 100 * (num of favourable outcomes) / (total num of possible outcomes)
// The numbers in the array are uniformly distributed, and have an equal chance of being chosen.

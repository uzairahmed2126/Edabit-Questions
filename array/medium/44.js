// Sum of Resistance in Parallel Circuits
// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

// 1/RTotal = 1/R1 + 1/R2 + 1/R3 ...

// Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.

// Worked Example
function parallelResistance(arr) {
  let sumOfReciprocals = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfReciprocals += 1 / arr[i];
  }
  let totalResistance = 1 / sumOfReciprocals;
  return Math.round(totalResistance * 10) / 10;
  //   let divideBy2 = 2 / sumOfReciprocals;
  //   let splited = String(divideBy2 / 2).split(".");
  //   let one = splited[1] !== undefined ? splited[1].slice(0, 1) : splited;
  //   splited[1] !== undefined ? (splited[1] = one) : splited[1];
  //   return +splited.join(".");
}
console.log(parallelResistance([6, 3, 6])); //➞ 1.5
// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5
// Examples
console.log(parallelResistance([6, 3])); //➞ 2
console.log(parallelResistance([10, 20, 10])); //➞ 4
console.log(parallelResistance([500, 500, 500])); //➞ 166.6
// Round to the nearest decimal place
// Notes
// Note that you should rearrange to return the Resistance Total, not 1 / Resistance Total.
// Round to the nearest decimal place.
// All inputs will be valid.

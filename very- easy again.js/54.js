// Multiply Every Array Item by Two
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// Examples
function getMultipliedArr(arr) {
  let result = [];
  //   for (let i = 0; arr[i] !== undefined; i++) {
  //     result.push(arr[i] * 2);
  //   }
  //   return result;
  //   return arr.map((element) => element * 2);
    arr.forEach((element) => {
      result.push(element * 2);
    });
    return result;
}
console.log(getMultipliedArr([2, 5, 3])); //➞ [4, 10, 6]
console.log(getMultipliedArr([1, 86, -5])); //➞ [2, 172, -10]
console.log(getMultipliedArr([5, 382, 0])); //➞ [10, 764, 0]
// Notes
// N/A

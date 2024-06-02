// Rotate the Array by One 🔄
// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// Examples
function rotateByOne(arr) {
    let result = [];
  let getLastValue = arr.pop();
    result.push(getLastValue);
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result;
}
console.log(rotateByOne([1, 2, 3, 4, 5])); //➞ [5, 1, 2, 3, 4]
console.log(rotateByOne([6, 5, 8, 9, 7])); //➞ [7, 6, 5, 8, 9]
console.log(rotateByOne([20, 15, 26, 8, 4])); //➞ [4, 20, 15, 26, 8]
// Notes
// N/A

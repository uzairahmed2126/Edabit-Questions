// Sum of the Items in an Array
// Create a function that takes an array and returns the sum of all items in the array.

// Examples
// function sumArray(arr) {
//     return arr.flat().flat().reduce((acc,cur)=>{
//         acc+=cur;
//         return acc
//     },0)
// }
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += sumArray(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}
function sumArray(arr) {
  let sum = 0;
  let stack = arr;
  while (stack.length > 0) {
    let current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
    } else {
      sum += current;
    }
  }
  return sum;
}
console.log(sumArray([1, 2, 3])); //➞ 6
// 1 + 2 + 3 = 6

console.log(sumArray([1, [2, [1]], 3])); //➞ 7
// 1 + 2 + 1 + 3 = 7
// Notes
// The item in an array can be another array.
